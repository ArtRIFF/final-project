import { createSlice } from "@reduxjs/toolkit";

const localStItemsCart = localStorage.getItem("inCart")
  ? JSON.parse(localStorage.getItem("inCart"))
  : [];
const initialState = {
    inCart: localStItemsCart,
}

const cartSlice = createSlice ({
    name: "cart",
    initialState,
    reducers: {
        setInCart(state, { payload }) {
            state.inCart = [...state.inCart, payload];
          },
        changeCart(state, { payload }) {
            state.inCart = payload;
          },
    }
})

export const { setInCart, changeCart } = cartSlice.actions;
export default cartSlice.reducer
