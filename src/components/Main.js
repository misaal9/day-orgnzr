import React from 'react';
import { ScrollView } from 'react-native';
import CategoryList from '../containers/CategoryList';
import AddNewButton from './AddNewButton';

export default class Main extends React.Component {
  // disable back button
  /*static navigationOptions = {
		headerLeft: null
  }*/
  render() {
    return (
      <ScrollView>
        <CategoryList />
      </ScrollView>
    );
  }
}
