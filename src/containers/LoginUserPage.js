import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginUserAction, setAppStateAction, resetLoginErrorMessageAction } from '../actions';
import LoginUserPage from '../components/LoginUserPage';

const mapStateToProps = state => {
    return {
        currentAppLoadingState: state.appState,
        loginErrorLabel: state.loginErrorLabel
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loginUser: bindActionCreators(loginUserAction, dispatch),
        setAppState: bindActionCreators(setAppStateAction, dispatch),
        resetLoginErrorMessage: bindActionCreators(resetLoginErrorMessageAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginUserPage);