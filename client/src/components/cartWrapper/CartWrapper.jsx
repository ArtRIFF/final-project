import { Container } from './styles';
import ProductCard from '../card/ProductCard.jsx'
import { useSelector } from 'react-redux';
import { selectCartArray } from '../../store/selectors';
import React from 'react';

import { ViewContext } from '../../context';

import { useContext } from 'react';

import FormComponent from '../formComponent/FormComponent';
const CartWrapper = () => {
  const { rowView } = useContext(ViewContext);
  const arrayCart = useSelector(selectCartArray);
  return (
    <>
      <Container rowView={rowView}>
        {
          arrayCart.map((product, ind) => {
            return <ProductCard key={ind} cardInfo={product} isInCart={true} />
          })
        }
      </Container>
      {!!(arrayCart.length)? <FormComponent/>: <p style={{textAlign: "center",
  color: "chocolate", fontSize: "30px"}}>Cart is empty!</p>}
    </>
  )
}


export default CartWrapper;