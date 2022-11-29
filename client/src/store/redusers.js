import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./actions";

const localStItemsFavorite = localStorage.getItem("inFavorite") ? JSON.parse(localStorage.getItem("inFavorite")) : [];
const localStItemsCart = localStorage.getItem("inCart") ? JSON.parse(localStorage.getItem("inCart")) : [];

export const defaultState = {
  modalRender: false,
  modalDeleteRender: false,
  chosenCard: null,
  productArray: [],
  cartArray: [],
  favoriteProd: [],
  newCollectionProduct: [],
  category: {
    earrings: [],
  },
  bestsellers: [],
  outlet: [],
  inCart: localStItemsCart,
  inFavorite: localStItemsFavorite
};

export default createReducer(defaultState, {
  [actions.setModalRender]: (state, { payload }) => {
    state.modalRender = payload;
  },
  [actions.setNewCollectionProduct]: (state, { payload }) => {
    state.newCollectionProduct = payload;
  },
  [actions.setCategoryEarrings]: (state, { payload }) => {
    state.category.earrings = payload;
  },
  [actions.setBestsellers]: (state, { payload }) => {
    state.bestsellers = payload;
  },
  [actions.setOutlet]: (state, { payload }) => {
    state.outlet = payload;
  },
  [actions.setInCart]:  (state, {payload}) => {
    state.inCart = [...state.inCart, payload]
  },
  [actions.removeFromCart]:  (state, {payload}) => {
    state.inCart = payload
  },
  [actions.setInFavorite]:  (state, {payload}) => {
    state.inFavorite = [...state.inFavorite, payload]
  },
  [actions.removeFromFavorite]:  (state, {payload}) => {
      state.inFavorite = payload
  }
  // [actions.toDefault]: () => defaultState,
});
