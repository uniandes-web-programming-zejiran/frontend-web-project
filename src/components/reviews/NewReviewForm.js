import React from 'react';
import { FormattedMessage } from 'react-intl';

const NewReviewForm = ({ newReview, handleInputChange, handleSubmitReview }) => {
    const isFormValid = () => {
        const { titulo, puntaje, descripcion, imagen } = newReview;
        return titulo && puntaje >= 0 && puntaje <= 5 && descripcion && imagen;
    };

    const handleReviewSubmit = () => {
        if (isFormValid()) {
            handleSubmitReview();
        } else {
            alert(<FormattedMessage id="formValidationError" />);
        }
    };

    const ratingError =
        newReview.puntaje > 5 || newReview.puntaje < 0
            ? <FormattedMessage id="ratingValidationError" />
            : '';

    return (
        <div className="card">
            <div className="card-header bg-primary text-white">
                <h3 className="mb-0"><FormattedMessage id="writeOpinion" /></h3>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <label htmlFor="title"><FormattedMessage id="title" />:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="titulo"
                        value={newReview.titulo}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="rating"><FormattedMessage id="rating" />:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="rating"
                        name="puntaje"
                        min="0"
                        max="5"
                        step="0.1"
                        value={newReview.puntaje}
                        onChange={handleInputChange}
                    />
                    {ratingError && <p className="text-danger">{ratingError}</p>}
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="comments"><FormattedMessage id="comments" />:</label>
                    <textarea
                        className="form-control"
                        id="comments"
                        name="descripcion"
                        value={newReview.descripcion}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="imagen"><FormattedMessage id="imageURL" />:</label>
                    <textarea
                        className="form-control"
                        id="imagen"
                        name="imagen"
                        value={newReview.imagen}
                        onChange={handleInputChange}
                    />
                </div>
                <button className="btn btn-primary mt-3" onClick={handleReviewSubmit}>
                    <FormattedMessage id="send" />
                </button>
            </div>
        </div>
    );
};

export default NewReviewForm;