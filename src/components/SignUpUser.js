/*
* This component is not needed at all. See LoginPage.js.
*/
import React from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-elements';

export default class SignUpUser extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            username: '',
            password: '',
            errorMessage: ''
        }
        this.props.setAppState(true);
    }

    changeTextHandler(text, username) {
        if (username) {
            this.setState({ username: text });
        } else {
            this.setState({ password: text });
        }
        this.props.resetLoginErrorMessage();
    }

    renderErrorMessage() {
        if (this.props.loginErrorLabel) {
            return (
            <View style={styles.errorLabel}>
                <Text style={styles.errorLabelText}>{this.props.loginErrorLabel}</Text>
            </View>
            );
        }
    }

    onSignUpPress() {
        this.props.setAppState(null);
        const { username, password } = this.state;
        this.props.signUpUser(username, password);
    }

    renderPage() {
        if (!this.props.currentAppLoadingState) {
            return (
                <Text>Creating New User...</Text>
            );
        }

        return (
            <View>
                <View style={styles.inputHolder}>
                    <Text style={styles.label}>Choose a username</Text>
                    <TextInput
                        style={styles.textStyle}
                        value={this.state.username}
                        onChangeText={text=>this.changeTextHandler(text, true)}
                        placeholder='sample@user.com'
                        autoCapitalize='none'
                    />
                </View>
                <View style={styles.inputHolder}>
                    <Text style={styles.label}>Choose a password</Text>
                    <TextInput
                        style={styles.textStyle}
                        value={this.state.password}
                        onChangeText={text=>this.changeTextHandler(text)}
                        placeholder='Password'
                        secureTextEntry
                    />
                </View>
                <Button
                    title='Create New User'
                    buttonStyle={styles.button}
                    fontFamily='roboto'
                    onPress={this.onSignUpPress.bind(this)}
                />
                {this.renderErrorMessage()}
            </View>
        );
    }

    render() {
        return (
            <View style={styles.viewStyle}>
                {this.renderPage()}
            </View>
        );
    }
}

const styles = {
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        textAlign: 'center'
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
        color: '#F44336',
        textAlign: 'center'
    }
}