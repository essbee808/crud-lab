import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {

   const {reviews, restaurantId, deleteReview} = this.props;
   debugger
   const associatedReviews = reviews.filter((review) => review.restaurantId === restaurantId)

   const reviewsList = associatedReviews.map((review) => {
    return (
      <Review 
        key={review.id}
        review={review}
        deleteReview={deleteReview}
      />
    )
  });

    return (
      <ul>
        Reviews
        {reviewsList}
      </ul>
    );
  }
};

export default Reviews;