import { SHOW_ADD_ITEM_SECTION } from '../actions/types';

const INITIAL_STATE = false;

export default addItemToCategoryReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_ADD_ITEM_SECTION:
      return action.visibleFlag;
    default:
      return state;
  };
}
