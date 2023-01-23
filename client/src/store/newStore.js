import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";
import productsSlice from "./products/productsSlice";
import favoriteSlice from "./favorite/favoriteSlice";
import cartSlice from "./cart/cartSlice";

const store = configureStore ({
    reducer: {
        products: productsSlice.reducer,
        cart: cartSlice.reducer,
        favorite: favoriteSlice.reducer,
        // composeWithDevTools(applyMiddleware(thunk, logger))
    },
    // middleware: 
})

export default store
