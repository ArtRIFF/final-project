import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFilteredCards } from "../../API/cardsAPI";

export const fetchFilteredProducts = createAsyncThunk(
  "filteredProducts/fetchByFilter",
  async (stringFilteredParam, thunkAPI)=> {
    const response = await getFilteredCards(stringFilteredParam)
    return response
  })

const initialState = {
    filteredProducts: []
}
const filteredProductsSlice = createSlice({
    name: 'filteredProducts',
    initialState,
    extraReducers: (builder) => {
      builder.addCase(fetchFilteredProducts.fulfilled, (state, { payload }) => {
        state.filteredProducts = payload;
    })
  }
})

export default filteredProductsSlice.reducer