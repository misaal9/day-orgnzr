import { FETCH_ALL_ITEMS, ADD_NEW_CATEGORY, SET_ACTIVE_CATEGORY, FETCH_CATEGORY_ITEMS, ADD_ITEM_TO_CATEGORY, SET_APP_STATE, SET_UID, SHOW_ADD_ITEM_SECTION, SET_SIGN_IN_ERROR_MSG } from './types';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';
import firebase from 'firebase';

// use redux middleware THUNK here for async
export const fetchAllCategoriesAction = () => {
  const uid = firebase.auth().currentUser.uid;
  return dispatch => {
    const categoriesRef = firebase.database().ref(`/categories/${uid}`);
    categoriesRef.once('value', snapshot => {
      const categories = _.map(snapshot.val(), (item, index) => {
        return item;
      });
      dispatch({
        type: SET_APP_STATE,
        newState: true
      });
      dispatch({
        type: FETCH_ALL_ITEMS,
        payload: categories
      })
    })
  }
};

// THIS IS ALMOST WORKING
export const addItemToListAction = (currentCategory, item) => {
  const uid = firebase.auth().currentUser.uid;
  const categoryRef = firebase.database().ref(`categoryItems/${uid}/"${currentCategory}"`);
  //console.log(_.capitalize(item).replace(/\s+/g, '-'));
  categoryRef.push({
    text: item,
    size: Math.floor(Math.random()*(5-1+1)+1)
  });
  return {
    type: ADD_ITEM_TO_CATEGORY,
    payload: { currentCategory, item }
  }
}

export const fetchCategoryItemsAction = categoryName => {
  const uid = firebase.auth().currentUser.uid;
  var itemsArr = [];
  return dispatch => {
    const categoryRef = firebase.database().ref(`categoryItems/${uid}/"${categoryName}"`);
    // THIS SHOULD BE OPTOMISED
    categoryRef.on('value', snapshot=>{
      snapshot.forEach(item=>{
        itemsArr.push(item.val())
      })
      dispatch({
        type: SET_APP_STATE,
        newState: true
      });
      dispatch({
        type: FETCH_CATEGORY_ITEMS,
        items: _.uniqBy(itemsArr, 'text')
      });
    });
  }
}

export const setActiveCategoryAction = title => {
  return {
    type: SET_ACTIVE_CATEGORY,
    title
  }
}

export const addNewCategoryAction = text => {
  const uid = firebase.auth().currentUser.uid;
  firebase.database().ref(`/categories/${uid}`)
  .push({
    name: text
  }).then(()=>{
    Actions.addCategoryItems();
  }).catch(err=>console.log(err));
  return {
    type: ADD_NEW_CATEGORY,
    payload: text
  }
};

export const setAppStateAction = newState => {
  return {
    type: SET_APP_STATE,
    newState
  }
}

export const setUidAction = uid => {
  console.log(uid);
  return {
    type: SET_UID,
    uid
  }
}

export const signUpUserAction = (username, password) => {
  return dispatch => {
    firebase.auth().createUserWithEmailAndPassword(username, password)
    .then(user => {
        console.log('New user added succesfully');
        firebase.database().ref('/users').push(user.uid);
        Actions.listItems();
    })
    .catch(err=>{
        dispatch({
          type: SET_APP_STATE,
          newState: true
        });
        switch (err.code) {
            case 'auth/user-not-found':
              return dispatch({
                type: SET_SIGN_IN_ERROR_MSG,
                msg: 'User does not exist'
              });
            default: 
              return dispatch({
                type: SET_SIGN_IN_ERROR_MSG,
                msg: err.message
              });
        }
    });
  }
}

export const loginUserAction = (username, password) => {
  return dispatch => {
    firebase.auth().signInWithEmailAndPassword(username, password)
    .then(user => {
        Actions.listItems();
    })
    .catch(err=>{
        dispatch({
          type: SET_APP_STATE,
          newState: true
        });
        switch (err.code) {
            case 'auth/user-not-found':
              return dispatch({
                type: SET_SIGN_IN_ERROR_MSG,
                msg: 'User does not exist'
              });
            default:
              return dispatch({
                type: SET_SIGN_IN_ERROR_MSG,
                msg: err.message
              });
        }
    });
  }
}

export const resetLoginErrorMessageAction = () => {
  return {
    type: SET_SIGN_IN_ERROR_MSG,
    msg: null
  }
}

export const showAddItemToCategoryAction = visibleFlag => {
  return {
    type: SHOW_ADD_ITEM_SECTION,
    visibleFlag
  }
}