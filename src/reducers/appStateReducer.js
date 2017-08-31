import { SET_APP_STATE } from '../actions/types';

export default appStateReducer = (state=null, action) => {
  switch (action.type) {
    case SET_APP_STATE:
      return action.newState;
    default:
      return state;
  }
}
