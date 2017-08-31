import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import activeCategoryReducer from './activeCategoryReducer';
import categoryItemsReducer from './categoryItemsReducer';
import appStateReducer from './appStateReducer';
import currentUserReducer from './currentUserReducer';
import addItemToCategoryReducer from './addItemToCategoryReducer';
import loginErrorLabelReducer from './loginErrorLabelReducer';

export default combineReducers({
  category: categoryReducer,
  activeCategory: activeCategoryReducer,
  activeCategoryItems: categoryItemsReducer,
  appState: appStateReducer,
  currentUser: currentUserReducer,
  addItemEnabled: addItemToCategoryReducer,
  loginErrorLabel: loginErrorLabelReducer
});
