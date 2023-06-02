import React from 'react';
import ReviewItem from './ReviewItem';

const ReviewList = ({ selectedProduct, calculateAverageScore }) => {
  const selectedReviews = selectedProduct && selectedProduct.reviews ? selectedProduct.reviews : [];

  if (!selectedProduct || !selectedProduct.reviews) {
    return <div className="review-list">No reviews available for the selected product.</div>;
  }

  return (
    <div className="review-list">
      {selectedReviews.length > 0 ? (
        <div>
          <div className="product-info">
            <img src={selectedProduct.imagen} alt={selectedProduct.nombre} className="product-image" />
            <h3>{selectedProduct.nombre}</h3>
          </div>

          <div className="reviews-section">
            <h4>Last Reviews</h4>
            <div className="average-score">
              Average Score: {calculateAverageScore(selectedReviews)} / 5
            </div>
            <div className="row">
              {selectedReviews.map(review => (
                <div className='col-md-6' key={review.id}>
                  <ReviewItem review={review} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="no-reviews">No reviews available for the selected product.</div>
      )}
    </div>
  );
};

export default ReviewList;
