import { ADD_NEW_CATEGORY, FETCH_ALL_ITEMS, ADD_ITEM_TO_CATEGORY } from '../actions/types';

const INITIAL_STATE = [];

export default CategoryReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ALL_ITEMS:
      return action.payload;
    case ADD_NEW_CATEGORY: {
      return state;
    }
    case ADD_ITEM_TO_CATEGORY:
      return state;
    default:
      return state
  }
}
