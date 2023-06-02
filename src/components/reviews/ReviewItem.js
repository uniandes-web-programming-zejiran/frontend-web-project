import React from 'react';

const ReviewItem = ({ review }) => {
    return (
        <div className="review-item">
            {review.imagen && <img src={review.imagen} alt={review.titulo} />}
            <h4>{review.titulo}</h4>
            <p>{review.descripcion}</p>
            <div className="review-stars">{/* Render stars indicator */}</div>
        </div>
    );
};

export default ReviewItem;
