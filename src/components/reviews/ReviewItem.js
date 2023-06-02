import React from 'react';

const ReviewItem = ({ review }) => {
    return (
        <div className="review-item card my-3">
            {review.imagen && <img src={review.imagen} alt={review.titulo} className="card-img-top" />}
            <div className="card-body">
                <h4 className="card-title">{review.titulo}</h4>
                <p className="card-text">{review.descripcion}</p>
                <p className="card-text">Rating: {review.puntaje}</p>
            </div>
        </div>
    );
};

export default ReviewItem;
