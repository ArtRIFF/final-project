import React from "react";
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#e36709',
  },
});

const ProductRating = ({value}) => {
  
  return (
      <StyledRating
        name="customized-color" value={value} precision={0.5} readOnly/>
  )
  
};
export default ProductRating;
