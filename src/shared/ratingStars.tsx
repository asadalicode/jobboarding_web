import ReactStars from 'react-rating-stars-component';
import React from 'react';
import { render } from 'react-dom';

interface ratingProps {
  isEditable?: boolean;
  count?: number;
  ratingChanged?: (val: any) => any;
  size?: number;
  activeColor?: string;
  color?: string;
}

// const ratingChanged = (newRating:any) => {
//   console.log(newRating);
// };

function RatingStars({
  isEditable = false,
  count = 5,
  ratingChanged,
  size = 24,
  color = '#ffd700',
  activeColor = '#ffd700',
}: ratingProps) {
  return (
    <ReactStars
      edit={isEditable}
      count={count}
      onChange={ratingChanged}
      size={size}
      activeColor={activeColor}
      color={color}
    />
  );
}

export default RatingStars;
