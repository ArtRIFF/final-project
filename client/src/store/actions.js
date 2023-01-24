import { createAction } from "@reduxjs/toolkit";
import { getCards, getFilteredCards } from "../API/cardsAPI";

export const setModalRender = createAction("SET_MODAL_RENDER");
export const setAllCollectionProduct = createAction("SET_ALL_COLLECTION_PRODUCT");
export const setFilteredProducts = createAction("SET_FILTERED_PRODUCTS");
export const setNewCollectionProduct = createAction("SET_NEW_COLLECTION_PRODUCT");
export const setBestsellers = createAction("SET_BESTSELLERS");
export const setOutlet = createAction("SET_OUTLET");
export const setInCart = createAction("SET_IN_CART");
export const changeCart = createAction("CHANGE_CART");
export const setInFavorite = createAction("SET_IN_FAVORITE");
export const removeFromFavorite = createAction("REMOVE_FROM_IN_FEVORITE");

export const fetchAllCollectionProduct = () => (dispatch) => {
  return getCards().then((data) => {
    dispatch(setAllCollectionProduct(data));
  });
};

export const fetchFilteredProducts = (stringFilteredParam) => (dispatch) => {
  return getFilteredCards(stringFilteredParam).then((data) => {
    dispatch(setFilteredProducts(data));
  });
};

// export const fetchNewCollectionProduct = () => (dispatch) => {
//   return getCards().then((data) => {
//     dispatch(
//       setNewCollectionProduct(
//         data.filter((element) => element.statusProduct === "NEW")
//       )
//     );
//   });
// };

// export const fetchBestsellers = () => (dispatch) => {
//   return getCards().then((data) => {
//     dispatch(
//       setBestsellers(
//         data.filter((element) => element.statusProduct === "BESTSELLER")
//       )
//     );
//   });
// };

// // export const fetchOutlet = () => (dispatch) => {
// //   return getCards().then((data) => {
// //     dispatch(
// //       setOutlet(data.filter((element) => element.statusProduct === "OUTLET"))
// //     );
// //   });
// // };
