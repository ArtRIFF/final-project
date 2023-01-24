import { createSlice } from "@reduxjs/toolkit";
import { getCards } from "../../API/cardsAPI";

const initialState = {
    newCollectionProduct: [],
    allCollectionProduct: [],
    bestsellers: [],
    outlet: []
}

const productsSlice = createSlice ({
    name: "products",
    initialState,
    reducers: {
        setAllCollectionProduct(state, {payload}) {
            state.allCollectionProduct = payload
        },
        setNewCollectionProduct(state, { payload }){
            state.newCollectionProduct = payload;
        },
        setBestsellers(state, { payload }){
            state.bestsellers = payload;
        },
        setOutlet (state, { payload }) {
            state.outlet = payload; 
        }
}
})
export const { setAllCollectionProduct, setNewCollectionProduct, setBestsellers, setOutlet } = productsSlice.actions;
export default productsSlice;

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
