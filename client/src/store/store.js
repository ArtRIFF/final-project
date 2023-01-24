import { configureStore } from "@reduxjs/toolkit";
import { batchedSubscribe } from 'redux-batched-subscribe';
import debounce from 'lodash.debounce';
import logger from "redux-logger";
import productsSlice from "./products/productsSlice";
import favoriteSlice from "./favorite/favoriteSlice";
import cartSlice from "./cart/cartSlice";
import filteredProductsSlice from "./filteredProducts/filteredProductsSlice"

const debounceNotify = debounce(notify => notify());

const store = configureStore ({
    reducer: {
        products: productsSlice.reducer,
        cart: cartSlice.reducer,
        favorite: favoriteSlice.reducer,
        filteredProducts: filteredProductsSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
    enhancers: [batchedSubscribe(debounceNotify)],
})

export default store
