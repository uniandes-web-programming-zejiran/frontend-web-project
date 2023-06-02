import React from 'react';
import ReviewItem from './ReviewItem';

const ReviewList = ({ products, selectedProduct, calculateAverageScore, renderStars, handleProductChange }) => {
  const selectedReviews = selectedProduct && selectedProduct.reviews ? selectedProduct.reviews : [];

  if (!selectedProduct || !selectedProduct.reviews) {
    return <div>No reviews available for the selected product.</div>;
  }

  return (
    <div className="review-list">
      {selectedReviews.length > 0 ? (
        <div>
          <div className="product-info">
            <img src={selectedProduct.imagen} alt={selectedProduct.nombre} />
            <h3>{selectedProduct.nombre}</h3>
            <p>Price: {selectedProduct.precio}</p>
          </div>

          <div className="reviews-section">
            <h4>Customer Reviews</h4>
            <div className="average-score">{/* Render average score and stars indicator */}</div>
            <div className="reviews-list">
              {selectedReviews.map(review => (
                <ReviewItem key={review.id} review={review} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>No reviews available for the selected product.</div>
      )}
    </div>
  );
};

export default ReviewList;
