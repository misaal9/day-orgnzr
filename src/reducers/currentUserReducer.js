import { SET_UID } from '../actions/types';

export default currentUserReducer = (state=null, action) => {
    switch (action.type) {
        case SET_UID:
            return action.uid;
        default: 
            return state; 
    }
}