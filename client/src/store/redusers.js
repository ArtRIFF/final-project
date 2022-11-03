import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

// export const defaultState = {
//   modalRender: false,
//   modalDeleteRender: false,
//   chosenCard: null,
//   productArray: [],
//   cartArray: [],
//   favoriteProd: []
// };

// export default createReducer(defaultState, {
// 	[actions.setModalRender]: (state, {payload}) => {
// 		state.modalRender = payload;
// 	}
// 	[actions.toDefault]: () => defaultState,
// })