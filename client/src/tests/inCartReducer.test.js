import inCartReducer, { setInCart } from "../store/cart/cartSlice";

describe('inCart reducer', () => {
    it('should return the initial state', () => {
        const initialState = undefined;
        const action = {type: " "};
        const result = inCartReducer(initialState, action);
        expect(result).toEqual({inCart: []});
    });
  
    it('should handle SET_SUCCESS', () => {
        const initialState = undefined;
        const action = setInCart({cardID:1234, quantity:1, size:'small'});
        const result = inCartReducer(initialState, action);
        expect(result).toEqual({inCart: [{cardID:1234, quantity:1, size:'small'}]});
      });
});
    
