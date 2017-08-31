import React from 'react';
import { Provider } from 'react-redux';
import { Font } from 'expo';
//import Main from './src/containers/Main';
import RouterComponent from './src/containers/RouterComponent';
//import { View } from 'react-native';
import store from './src/store';

// disable ios simulator warnings
console.disableYellowBox = true;

export default class App extends React.Component {
  componentWillMount() {
    Font.loadAsync({
        'roboto': require('./assets/fonts/Roboto-Regular.ttf')
    });
  }
  render() {
    return (
      <Provider store={store}>
        <RouterComponent/>
      </Provider>
    );
  }
}
