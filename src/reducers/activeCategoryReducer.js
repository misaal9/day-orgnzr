import { SET_ACTIVE_CATEGORY } from '../actions/types';

const INITIAL_STATE = '';

export default activeCategoryReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ACTIVE_CATEGORY:
      return action.title;
    default:
      return state;
  };
}
