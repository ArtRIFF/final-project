import rootReducers, {defaultState} from "../store/redusers";
import * as actions from '../store/actions';


describe('test the reducer and actions', () => {
  it('should return the initial state', () => {
    expect(defaultState).toEqual({ 
      modalRender: false,
      modalDeleteRender: false,
      chosenCard: null,
      productArray: [],
      cartArray: [],
      favoriteProd: []
    });
  })

  it('should set modal render from false to true', () => {
    expect(rootReducers(defaultState, actions.setModalRender(true)))
      .toEqual({
        modalRender: true,
        modalDeleteRender: false,
        chosenCard: null,
        productArray: [],
        cartArray: [],
        favoriteProd: []
      })
  })
  it('should set delete modal render from false to true', () => {
    expect(rootReducers(defaultState, actions.setDeleteModalRender(true)))
      .toEqual({
        modalRender: false,
        modalDeleteRender: true,
        chosenCard: null,
        productArray: [],
        cartArray: [],
        favoriteProd: []
      })
  })
})
