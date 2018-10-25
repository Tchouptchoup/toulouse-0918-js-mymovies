import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';

 
class Bar extends Component {
  render() {
    const { vote_average } = this.props.affiche;
    return (
      <StarRatings 
        rating={`${vote_average}`/2}
        starDimension="2rem"
        starSpacing=".5rem"
      />
    );
  }
}
export default Bar;