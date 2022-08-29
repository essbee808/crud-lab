import React, { Component } from 'react';

class RestaurantInput extends Component {

  constructor(props){
    super(props);
    this.state = {
      text: '',
    }
  }

  handleChange = (event) => {
    this.setState({text: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: "",
    })
  }

  render() {
    return (
      <div>
        Restaurant Input
        <form onSubmit={this.handleSubmit}>
          <input 
           type="text"
           placeholder="Enter a name"
           value={this.state.text}
           onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    );
    
  }
};

export default RestaurantInput;
