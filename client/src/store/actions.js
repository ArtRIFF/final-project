import { createAction } from "@reduxjs/toolkit";

import { sendRequest } from "../helpers/sendRequest";
import API_PRODUCTS from "../config/API";

export const setModalRender = createAction("SET_MODAL_RENDER");
export const setNewCollectionProduct = createAction(
  "SET_NEW_COLLECTION_PRODUCT"
);
export const setCategoryEarrings = createAction("SET_CATEGORY_EARRINGS");

export const setBestsellers = createAction ('SET_BESTSELLERS');

export const setOutlet = createAction ('SET_OUTLET');
// export const fetchProducts = () => (dispatch) => {
// 	return sendRequest(API_PRODUCTS)
// 		.then(data => {
// 			dispatch(setProductArray(data));
// 		})
// }

export const fetchNewCollectionProduct = () => (dispatch) => {
  return fetch(`./newCollection.json`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch(setNewCollectionProduct(data));
    });
};

export const fetchCategoryEarrings = () => (dispatch) => {
  return fetch(`./categoryEarrings.json`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch(setCategoryEarrings(data));
    });
};
export const fetchBestsellers = () => (dispatch) => {
  return fetch(`./productBase.json`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch(setBestsellers(data));
    });
}

export const fetchOutlet = () => (dispatch) => {
  return fetch(`./productBase.json`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch(setOutlet(data));
    });
}
