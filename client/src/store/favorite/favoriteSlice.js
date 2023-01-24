import { createSlice } from "@reduxjs/toolkit";

const localStItemsFavorite = localStorage.getItem("inFavorite")
  ? JSON.parse(localStorage.getItem("inFavorite"))
  : [];
const initialState = {
    inFavorite: localStItemsFavorite,
}

const favoriteSlice = createSlice ({
    name: "favorite",
    initialState,
    reducers: {
        setInFavorite(state, { payload }) {
            state.inFavorite = [...state.inFavorite, payload];
          },
        removeFromFavorite (state, { payload }) {
            state.inFavorite = payload;
          },
    }
})

export const { setInFavorite,  removeFromFavorite } = favoriteSlice.actions
export default favoriteSlice
