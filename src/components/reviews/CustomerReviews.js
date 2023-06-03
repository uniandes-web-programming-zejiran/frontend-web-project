import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NewReviewForm from './NewReviewForm';
import ReviewList from './ReviewList';
import { FormattedMessage } from 'react-intl';

const CustomerReviews = () => {
    const loginURL = 'http://localhost:3000/api/v1/users/login';
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState('');
    const [newReview, setNewReview] = useState({
        producto_id: '',
        puntaje: '',
        descripcion: '',
        imagen: 'https://picsum.photos/300',
    });

    useEffect(() => {
        const storedProducts = localStorage.getItem('listaProd');
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts));
        }

        const fetchData = async () => {
            const productURL = 'http://localhost:3000/api/v1/productos';
            const productCredentials = {
                username: 'adminProducto',
                password: 'adminProducto',
            };

            try {
                const loginResponse = await fetch(loginURL, {
                    method: 'POST',
                    body: JSON.stringify(productCredentials),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                });

                const { token } = await loginResponse.json();
                const headersP = { Authorization: 'Bearer ' + token };

                const productResponse = await fetch(productURL, { headers: headersP });
                const productData = await productResponse.json();

                setProducts(productData);
                localStorage.setItem('listaProd', JSON.stringify(productData));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewReview((prevReview) => ({
            ...prevReview,
            [name]: name === 'imagen' ? value.trim() : value,
        }));
    };

    const handleSubmitReview = () => {
        const reviewURL = 'http://localhost:3000/api/v1/reviews/';
        const loginCredentials = {
            username: 'adminReview',
            password: 'adminReview',
        };
        const reviewData = {
            titulo: newReview.titulo,
            descripcion: newReview.descripcion,
            puntaje: parseFloat(newReview.puntaje),
            imagen: newReview.imagen,
            fecha: new Date().toISOString().slice(0, 10),
        };

        fetch(loginURL, {
            method: 'POST',
            body: JSON.stringify(loginCredentials),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => res.json())
            .then((res) => {
                const token = res.token;
                const headersR = {
                    Authorization: 'Bearer ' + token,
                    'Content-type': 'application/json; charset=UTF-8',
                };

                fetch(reviewURL, {
                    method: 'POST',
                    body: JSON.stringify(reviewData),
                    headers: headersR,
                })
                    .then((res) => res.json())
                    .then((res) => {
                        const reviewId = res.id;
                        console.log(selectedProduct);
                        const productId = selectedProduct.id;

                        // Associate the review with the selected product
                        const productReviewEndpoint = `http://localhost:3000/api/v1/productos/${productId}/reviews/${reviewId}`;

                        fetch(productReviewEndpoint, {
                            method: 'POST',
                            headers: headersR,
                        })
                            .then((res) => res.json())
                            .then((res) => {
                                setNewReview({
                                    producto_id: '',
                                    puntaje: '',
                                    descripcion: '',
                                    imagen: 'https://picsum.photos/300',
                                });
                                window.location.reload();
                                toast.success(<FormattedMessage id="reviewSubmitted" />);
                            })
                            .catch((error) => {
                                toast.error(<FormattedMessage id="associateReviewFailed" />);
                            });
                    })
                    .catch((error) => {
                        toast.error(<FormattedMessage id="submitReviewFailed" />);
                    });
            });
    };

    const handleProductChange = (e) => {
        const selectedProductId = e.target.value;
        const selectedProduct = products.find((product) => product.id === selectedProductId);
        setSelectedProduct(selectedProduct);
    };

    const calculateAverageScore = (reviews) => {
        if (reviews.length === 0) return 0;

        const totalScore = reviews.reduce((sum, review) => sum + parseFloat(review.puntaje), 0);
        const averageScore = totalScore / reviews.length;

        return averageScore.toFixed(1);
    };

    return (
        <div className="container">
            <ToastContainer />
            <div className="mb-5">
                <h2 className="mb-3">
                    <FormattedMessage id="customerReviews" />
                </h2>
                <div className="form-group">
                    <select
                        className="form-control mb-3"
                        id="product-select"
                        name="producto_id"
                        value={selectedProduct}
                        onChange={handleProductChange}
                    >
                        <option value="">
                            <FormattedMessage id="selectProduct" />
                        </option>
                        {products.map((product) => (
                            <option key={product.id} value={product.id}>
                                {product.nombre}
                            </option>
                        ))}
                    </select>
                    {selectedProduct && (
                        <h5>
                            <strong>
                                <FormattedMessage id="selectedProduct" />
                            </strong>{' '}
                            {selectedProduct.nombre}
                        </h5>
                    )}
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <NewReviewForm
                        products={products}
                        newReview={newReview}
                        handleInputChange={handleInputChange}
                        handleSubmitReview={handleSubmitReview}
                        handleProductChange={handleProductChange}
                    />
                </div>
                <div className="col-md-8">
                    <ReviewList
                        products={products}
                        selectedProduct={selectedProduct}
                        calculateAverageScore={calculateAverageScore}
                        handleProductChange={handleProductChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default CustomerReviews;
