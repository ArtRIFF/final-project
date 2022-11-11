import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./actions";

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
  // [actions.toDefault]: () => defaultState,
});
