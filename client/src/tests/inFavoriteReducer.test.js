import inFavoriteReducer, { setInFavorite, removeFromFavorite } from "../store/favorite/favoriteSlice";

describe('inCart reducer', () => {
    it('should return the initial state', () => {
        const initialState = undefined;
        const action = {type: " "};
        const result = inFavoriteReducer(initialState, action);
        expect(result).toEqual({inFavorite: []});
    });
  
    it('should handle SET_SUCCESS', () => {
        const initialState = undefined;
        const action = setInFavorite({cardID:1234});
        const result = inFavoriteReducer(initialState, action);
        expect(result).toEqual({inFavorite: [{cardID:1234}]});
      });
    
    it('should handle REMOVE_SUCCESS', () => {
        const initialState = {inFavorite: [1234, 2345, 3445]};
        const action = removeFromFavorite([1234, 3445]);
        const result = inFavoriteReducer(initialState, action);
        expect(result).toEqual({inFavorite: [1234, 3445]});
    });


});
    