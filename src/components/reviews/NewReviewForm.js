import React from 'react';

const NewReviewForm = ({  newReview, handleInputChange, handleSubmitReview }) => {
    const isFormValid = () => {
        const { titulo, puntaje, descripcion, imagen } = newReview;
        return titulo && puntaje >= 0 && puntaje <= 5 && descripcion && imagen;
    };

    const handleReviewSubmit = () => {
        if (isFormValid()) {
            handleSubmitReview();
        } else {
            alert('Please fill in all fields correctly before submitting the review.');
        }
    };

    const ratingError = newReview.puntaje > 5 || newReview.puntaje < 0 ? 'Rating should be between 0 and 5.' : '';

    return (
        <div className="card">
            <div className="card-header bg-primary text-white">
                <h3 className="mb-0">Write My Opinion</h3>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input type="text" className="form-control" id="title" name="titulo" value={newReview.titulo} onChange={handleInputChange} />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="rating">Rating:</label>
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
                    <label htmlFor="comments">Comments:</label>
                    <textarea className="form-control" id="comments" name="descripcion" value={newReview.descripcion} onChange={handleInputChange} />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="imagen">Image URL:</label>
                    <textarea className="form-control" id="imagen" name="imagen" value={newReview.imagen} onChange={handleInputChange} />
                </div>
                <button className="btn btn-primary mt-3" onClick={handleReviewSubmit}>Send</button>
            </div>
        </div>
    );
};

export default NewReviewForm;
