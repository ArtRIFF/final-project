
import Button from './button/Button';
import Modal from './modal/Modal';
import CardWrapper from './cardWrapper/CardWrapper';
import CartWrapper from './cartWrapper/CartWrapper';
import FavoriteCardWrapper from './favoriteCardWrapper/FavoriteCardWrapper';
import Header from './header/Header';
import { useEffect } from 'react';
import * as React from 'react';
import { Routes, Route} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import {
  selectModalRender,
  selectModalDeleteRender,
  selectChosenCard,
  selectProductArray,
  selectCartArray
} from '../store/selectors';

import {
  setCartProd,
  setChosenCard,
  setDeleteModalRender,
  setModalRender
} from '../store/actions';

import {
  fetchProducts,

} from '../store/actions'

const App = () => {
  const dispatch = useDispatch();
  const modalRender = useSelector(selectModalRender);
  const modalDeleteRender = useSelector(selectModalDeleteRender);
  const chosenCard = useSelector(selectChosenCard);
  const arrayCart = useSelector(selectCartArray);
  const productArray = useSelector(selectProductArray);
  

  useEffect(() => {
      dispatch(fetchProducts());
  }, [])


  const addToCart = () => {
      let newArr;
      let sameElem = arrayCart.find(card => card.productArticle === chosenCard.productArticle);
      if (!sameElem) {
        newArr = [...arrayCart,chosenCard];
      } else {
        newArr = [...arrayCart];
      }
    dispatch(setCartProd(newArr));
    dispatch(setModalRender(false));
    dispatch(setChosenCard(null));
  }

 
  const closeModal = () => {
    dispatch(setModalRender(false));
    dispatch(setDeleteModalRender(false));
    dispatch(setChosenCard(null));
  }

  const removeCard = () => {
    const newArr = arrayCart.filter(card => card.productArticle !== chosenCard.productArticle);
    dispatch(setCartProd(newArr));
    dispatch(setDeleteModalRender(false));
    dispatch(setChosenCard(null))
  }
 
 
  let modalElement = null;
  let modalDeleteElement = null;
  if (modalRender) {
    modalElement = <Modal header="Message" text="Product successfully added to your cart!" closeButton={true} onClose={closeModal}>
      <Button backgroundColor="rgb(0 0 0 / 28%)" text="Oк" onClick={addToCart} />
    </Modal>;
  }
  if (modalDeleteRender) {
    modalDeleteElement = <Modal header="Delete" text="Do you want to remove this product?" closeButton={true} onClose={closeModal}>
      <Button backgroundColor="chocolate" text="Remove" onClick={removeCard} />
      <Button backgroundColor="#00800099" text="Cancel" onClick={closeModal} />
    </Modal>;
  }

  return (
    <>
      {modalDeleteElement}
      {modalElement}
      <Header/>
      <Routes>
        <Route path="/" element={<CardWrapper cardsArray={productArray} />} />
        <Route path="cart" element={<CartWrapper/>} />
        <Route path="favorite" element={<FavoriteCardWrapper/>} />
        <Route path="*" element={<p style={{paddingTop: "300px", textAlign:'center',fontSize:'40px', color: 'white'}}>There's nothing here: 404!</p>}>
        </Route>
      </Routes>
    </>
  );
}

export default App;

