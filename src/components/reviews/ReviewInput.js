import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: ''
  }

  handleOnChange = (event) => {
    this.setState({text: event.target.value});
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
    this.setState({
      text: ''});
  }

  render() {
    return (
      <div>
        Review Input
        <form onSubmit={this.handleOnSubmit}>
          <input 
            type="text"
            placeholder="Create a review"
            onChange={this.handleOnChange}
            value={this.state.text}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
