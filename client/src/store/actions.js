import { createAction } from "@reduxjs/toolkit";
import { sendRequest, getCards } from "../helpers/sendRequest";

export const setModalRender = createAction("SET_MODAL_RENDER");
export const setAllCollectionProduct = createAction(
  "SET_ALL_COLLECTION_PRODUCT"
);
export const setNewCollectionProduct = createAction(
  "SET_NEW_COLLECTION_PRODUCT"
);
export const setCategoryEarrings = createAction("SET_CATEGORY_EARRINGS");

export const setBestsellers = createAction("SET_BESTSELLERS");

export const setOutlet = createAction("SET_OUTLET");
// export const fetchProducts = () => (dispatch) => {
// 	return sendRequest(API_PRODUCTS)
// 		.then(data => {
// 			dispatch(setProductArray(data));
// 		})
// }

export const fetchAllCollectionProduct = () => (dispatch) => {
  return getCards().then((data) => {
    dispatch(setAllCollectionProduct(data));
  });
};

export const fetchNewCollectionProduct = () => (dispatch) => {
  return getCards().then((data) => {
    dispatch(
      setNewCollectionProduct(
        data.filter((element) => element.statusProduct === "NEW")
      )
    );
  });
};

export const fetchCategoryEarrings = () => (dispatch) => {
  return getCards().then((data) => {
    dispatch(
      setCategoryEarrings(
        data.filter(
          (element) =>
            element.categories === "earring" ||
            element.categories === "child-earrings"
        )
      )
    );
  });
};

export const fetchBestsellers = () => (dispatch) => {
  return getCards().then((data) => {
    dispatch(
      setBestsellers(
        data.filter((element) => element.statusProduct === "BESTSELLER")
      )
    );
  });
};

export const fetchOutlet = () => (dispatch) => {
  return getCards().then((data) => {
    dispatch(
      setOutlet(data.filter((element) => element.statusProduct === "OUTLET"))
    );
  });
};
