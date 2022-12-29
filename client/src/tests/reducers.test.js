import rootReducers, { defaultState } from "../store/reducers";
import * as actions from '../store/actions';


describe('test the reducer and actions', () => {
  it('should return the initial state', () => {
    expect(defaultState).toEqual({
      modalRender: false,
      newCollectionProduct: [],
      allCollectionProduct: [],
      bestsellers: [],
      outlet: [],
      inCart: [],
      inFavorite: []
    });
  })

  it('should set modal render from false to true', () => {
    expect(rootReducers(defaultState, actions.setModalRender(true)))
      .toEqual({
        modalRender: true,
        newCollectionProduct: [],
        allCollectionProduct: [],
        bestsellers: [],
        outlet: [],
        inCart: [],
        inFavorite: []
      })
  });

  it('should set bestseller', () => {
    expect(rootReducers(defaultState, actions.setBestsellers([1, 2, 3, 4])))
      .toEqual({
        modalRender: false,
        newCollectionProduct: [],
        allCollectionProduct: [],
        bestsellers: [1, 2, 3, 4],
        outlet: [],
        inCart: [],
        inFavorite: []
      })
  })
})
