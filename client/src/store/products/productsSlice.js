import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCards } from "../../API/cardsAPI";

export const fetchOutlet = createAsyncThunk(
  "product/fetchByOutlet",
  async (thunkAPI)=> {
    const response = await getCards()
    return response.filter(element => element.statusProduct === "OUTLET")
  })
export const fetchAllCollectionProduct = createAsyncThunk(
  "product/fetchByAllProduct",
  async (thunkAPI)=> {
    const response = await getCards()
    return response
  })
export const fetchNewCollectionProduct = createAsyncThunk(
  "product/fetchByNewCollection",
  async (thunkAPI)=> {
    const response = await getCards()
    return response.filter((element) => element.statusProduct === "NEW")
  })      
export const fetchBestsellers = createAsyncThunk(
  "product/fetchByBestsellers",
  async (thunkAPI)=> {
    const response = await getCards()
    return response.filter((element) => element.statusProduct === "BESTSELLER")
  })      

const initialState = {
    newCollectionProduct: [],
    allCollectionProduct: [],
    bestsellers: [],
    outlet: []
}

const productsSlice = createSlice ({
    name: "products",
    initialState,
    extraReducers: (builder) => {
      builder.addCase(fetchOutlet.fulfilled, (state, { payload }) => {
        state.outlet = payload});
      builder.addCase(fetchAllCollectionProduct.fulfilled, (state, { payload }) => {
        state.allCollectionProduct = payload});
      builder.addCase(fetchNewCollectionProduct.fulfilled, (state, { payload }) => {
        state.newCollectionProduct = payload}); 
      builder.addCase(fetchBestsellers.fulfilled, (state, { payload }) => {
        state.bestsellers = payload});
    }
})

export default productsSlice.reducer;