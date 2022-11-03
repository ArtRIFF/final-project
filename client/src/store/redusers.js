import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

export const defaultState = {
  modalRender: false,
  modalDeleteRender: false,
  chosenCard: null,
  productArray: [],
  cartArray: [],
  favoriteProd: []
};

export default createReducer(defaultState, {
	[actions.setModalRender]: (state, {payload}) => {
		state.modalRender = payload;
	},
	[actions.setDeleteModalRender]: (state, {payload}) => {
		state.modalDeleteRender = payload;
	},
  [actions.setChosenCard]: (state, {payload}) => {
		state.chosenCard = payload;
	},
  [actions.setProductArray]: (state, {payload}) => {
		state.productArray = payload;
	},
  [actions.setCartProd]: (state, {payload}) => {
		state.cartArray = payload;
	},
  [actions.setFavoriteProd]: (state, {payload}) => {
		state.favoriteProd = payload;
	},
	[actions.toDefault]: () => defaultState,
})