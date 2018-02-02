import React, { Component } from 'react';
class RatingBox extends Component {

  render() {
    return (
      <div className="container text-center">
        <div className="review__stars">
          <input type="radio" name="rating" id="star-5" required />
          <label for="star-5"></label>
          <input type="radio" name="rating" id="star-4" required />
          <label for="star-4"></label>
          <input type="radio" name="rating" id="star-3" required />
          <label for="star-3"></label>
          <input type="radio" name="rating" id="star-2" required />
          <label for="star-2"></label>
          <input type="radio" name="rating" id="star-1" required />
          <label for="star-1"></label>
        </div>
      </div>
    )
  }
}

export default RatingBox;