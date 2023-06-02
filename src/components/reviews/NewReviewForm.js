import React from 'react';

const NewReviewForm = ({ products, selectedProduct, newReview, handleProductChange, handleInputChange, handleSubmitReview }) => {
    return (
        <div>
            <h3>Write my opinion</h3>

            <div>
                <div>
                    <label>Title:</label>
                    <input type="text" name="titulo" value={newReview.titulo} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Rating:</label>
                    <input
                        type="number"
                        name="puntaje"
                        min="0"
                        max="5"
                        step="0.1"
                        value={newReview.puntaje}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Comments:</label>
                    <textarea name="descripcion" value={newReview.descripcion} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Attachments:</label>
                    <textarea name="attachments" value={newReview.imagen} onChange={handleInputChange} />
                </div>
                <button onClick={handleSubmitReview}>Send</button>
            </div>
        </div>
    );
};

export default NewReviewForm;
