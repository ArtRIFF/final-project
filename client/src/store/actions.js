import { createAction } from '@reduxjs/toolkit';

import {sendRequest} from "../helpers/sendRequest";
import API_PRODUCTS from '../config/API';

export const setModalRender = createAction("SET_MODAL_RENDER");
export const setDeleteModalRender = createAction("SET_DELETE_MODAL_RENDER");
export const setChosenCard = createAction("SET_CHOSEN_CARD");
export const setFavoriteProd = createAction("SET_FAVORITE_PROD");
export const setCartProd = createAction("SET_CART_PROD");
export const setProductArray = createAction("SET_PRODUCT_ARRAY");
export const toDefault = createAction('TO_DEFAULT');

export const fetchProducts = () => (dispatch) => {
	return sendRequest(API_PRODUCTS)
		.then(data => {
			dispatch(setProductArray(data));
		})
}
