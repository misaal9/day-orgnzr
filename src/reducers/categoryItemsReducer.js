import { FETCH_CATEGORY_ITEMS } from '../actions/types';

const INITIAL_STATE = [];

export default categoryItemsReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_ITEMS: {
      //console.log(action.items);
      return action.items;
    }
    default: {
      return state;
    }
  }
}
