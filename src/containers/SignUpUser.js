import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signUpUserAction, setAppStateAction, resetLoginErrorMessageAction } from '../actions';
import SignUpUser from '../components/SignUpUser';

const mapStateToProps = state => {
    return {
        currentAppLoadingState: state.appState,
        loginErrorLabel: state.loginErrorLabel
    }
};

const mapDispatchToProps = dispatch => {
    return {
        signUpUser: bindActionCreators(signUpUserAction, dispatch),
        setAppState: bindActionCreators(setAppStateAction, dispatch),
        resetLoginErrorMessage: bindActionCreators(resetLoginErrorMessageAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpUser);