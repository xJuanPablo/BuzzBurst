import React from 'react';
import RotatingReview from './RotatingReviews';

function Reviews() {
  return (
    <div className='review-container'>
      <h3 className='testimonials-h3'>Testimonials</h3>
      <RotatingReview/>
    </div>
  )
}

export default Reviews;