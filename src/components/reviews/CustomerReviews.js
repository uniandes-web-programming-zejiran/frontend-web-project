import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NewReviewForm from './NewReviewForm';
import ReviewList from './ReviewList';

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
        const productURL = 'http://localhost:3000/api/v1/productos';
        const productCredentials = {
            username: 'adminProducto',
            password: 'adminProducto',
        };

        fetch(loginURL, {
            method: 'POST',
            body: JSON.stringify(productCredentials),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(res => {
                const token = res.token;
                const headersP = { Authorization: 'Bearer ' + token };

                fetch(productURL, { headers: headersP })
                    .then(res => res.json())
                    .then(res => {
                        setProducts(res);
                    });
            });
    }, []);

    const handleInputChange = e => {
        const { name, value, files } = e.target;
        setNewReview(prevReview => ({
            ...prevReview,
            [name]: files ? files[0] : value,
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
            .then(res => res.json())
            .then(res => {
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
                    .then(res => res.json())
                    .then(res => {
                        const reviewId = res.id;
                        console.log(selectedProduct)
                        const productId = selectedProduct.id

                        // Associate the review with the selected product
                        const productReviewEndpoint = `http://localhost:3000/api/v1/productos/${productId}/reviews/${reviewId}`;

                        fetch(productReviewEndpoint, {
                            method: 'POST',
                            headers: headersR,
                        })
                            .then(res => res.json())
                            .then(res => {
                                toast.success('Review submitted successfully');
                                setNewReview({
                                    producto_id: '',
                                    puntaje: '',
                                    descripcion: '',
                                    imagen: 'https://picsum.photos/300',
                                });
                            })
                            .catch(error => {
                                toast.error('Failed to associate review with the product');
                            });
                    })
                    .catch(error => {
                        toast.error('Failed to submit review');
                    });
            });
    };


    const handleProductChange = e => {
        const selectedProductId = e.target.value;
        const selectedProduct = products.find(product => product.id === selectedProductId);
        setSelectedProduct(selectedProduct);
    };

    const calculateAverageScore = reviews => {
        if (reviews.length === 0) return 0;

        const totalScore = reviews.reduce((sum, review) => sum + parseFloat(review.puntaje), 0);
        const averageScore = totalScore / reviews.length;

        return averageScore.toFixed(1);
    };

    const renderStars = score => {
        const starPercentage = (score / 5) * 100;
        const starStyle = { width: `${starPercentage}%` };

        return (
            <div className="stars-outer">
                <div className="stars-inner" style={starStyle}></div>
            </div>
        );
    };

    return (
        <div className='container'>
            <ToastContainer />
            <div>
            <h2>Customer Reviews</h2>
                <label>Select a product:</label>
                <select name="producto_id" value={selectedProduct} onChange={handleProductChange}>
                    <option value="">Select a product</option>
                    {products.map(product => (
                        <option key={product.id} value={product.id}>
                            {product.nombre}
                        </option>
                    ))}
                </select>
            </div>
            <NewReviewForm
                products={products}
                newReview={newReview}
                handleInputChange={handleInputChange}
                handleSubmitReview={handleSubmitReview}
                handleProductChange={handleProductChange}
            />
            <ReviewList
                products={products}
                selectedProduct={selectedProduct}
                calculateAverageScore={calculateAverageScore}
                renderStars={renderStars}
                handleProductChange={handleProductChange}
            />
        </div>
    );
};

export default CustomerReviews;
