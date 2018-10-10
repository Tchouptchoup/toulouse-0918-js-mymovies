import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';

 
class Bar extends Component {
  render() {
    const { vote_average } = this.props.affiche;

    return (
      <StarRatings 
        rating={vote_average}
        starDimension="2rem"
        starSpacing="1rem"
      />
    );
  }
}
export default Bar;