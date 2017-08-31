import { SET_SIGN_IN_ERROR_MSG } from '../actions/types';

const INITIAL_VALUE = '';

export default loginErrorLabelReducer = (state=INITIAL_VALUE, action) => {
    switch (action.type) {
        case SET_SIGN_IN_ERROR_MSG:
            return action.msg;
        default:
            return INITIAL_VALUE;
    }
}