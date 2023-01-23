import { createSlice } from "@reduxjs/toolkit";
import { getFilteredCards } from "../../API/cardsAPI";

const initialState = {
    filteredProducts: []
}
const filteredProductsSlice = createSlice({
    name: 'filteredProducts',
    initialState,
    reducers: {
        setFilteredProducts (state, { payload }) {
            state.filteredProducts = payload;
          },
    }
})

export const fetchFilteredProducts = (stringFilteredParam) => (dispatch) => {
    return getFilteredCards(stringFilteredParam).then((data) => {
      dispatch(setFilteredProducts(data));
    });
  };

export const {setFilteredProducts} = filteredProductsSlice.actions;
export default filteredProductsSlice