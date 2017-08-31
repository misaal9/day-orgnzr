import React from 'react';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-elements';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            username: 'sample@user.com',
            password: 'password',
            errorMessage: ''
        }
        this.props.setAppState(true);
    }

    onSignInPress() {
        this.props.setAppState(null);
        const { username, password } = this.state;
        this.props.loginUser(username, password);
    };

    renderErrorMessage() {
        if (this.props.loginErrorLabel) {
            return (
            <View style={styles.errorLabel}>
                <Text style={styles.errorLabelText}>{this.props.loginErrorLabel}</Text>
            </View>
            );
        }
    }

    onChangeTextHandler(text, username) {
        if (username) {
            this.setState({username: text});
        } else {
            this.setState({password: text});    
        }
        this.props.resetLoginErrorMessage();
    }

    renderPage() {
        if (!this.props.currentAppLoadingState) {
            return(
                <Text>Logging In...</Text>
            );
        }
        return (
            <View>
                <View style={styles.inputHolder}>
                    <Text style={styles.label}>Username/Email Id</Text>
                    <TextInput
                        style={styles.textStyle}
                        placeholder='user@example.com'
                        value={this.state.username}
                        onChangeText={text=>this.onChangeTextHandler(text, true)}
                        autoCapitalize='none'
                    />
                </View>
                <View style={styles.inputHolder}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.textStyle}
                        placeholder='password'
                        value={this.state.password}
                        onChangeText={text=>this.onChangeTextHandler(text)}
                        secureTextEntry
                    />
                </View>
                <Button
                    title='Log In'
                    buttonStyle={styles.button}
                    fontFamily='roboto'
                    onPress={this.onSignInPress.bind(this)}
                />
                <TouchableHighlight style={styles.signUpLabel} onPress={()=>Actions.signUpUser()}>
                    <Text style={styles.label}>New user? Click here.</Text>
                </TouchableHighlight>
                {this.renderErrorMessage()}
            </View>
        );
    }

    render() {
        return(
            <View style={styles.viewStyle}>
                { this.renderPage() }
            </View>
        );
    }
}

const styles = {
    textStyle: {
        textAlign: 'center'
    },
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputHolder: {
        marginBottom: 20
    },
    label: {
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#009688',
        marginBottom: 20
    },
    signUpLabel: {
        marginBottom: 20
    },
    errorLabel: {
        padding: 10,
        textAlign: 'center'
    },
    errorLabelText: {
        textAlign: 'center',
        color: '#F44336'
    }
}