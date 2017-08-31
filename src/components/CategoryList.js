import React from 'react';
import _ from 'lodash';
import { View, Text } from 'react-native';
import LoadedEmpty from './LoadedEmpty';
import { List, ListItem } from 'react-native-elements'

class CategoryList extends React.Component {
  componentWillMount() {
    this.props.fetchAllCategories();
  }

  renderLists() {
    const { categories } = this.props;
    if (!this.props.currentAppLoadingState) {
        return (
          <Text>Loading saved categories...</Text>
        );
    }
    if (!categories.length) {
      return(
        <LoadedEmpty />
      );
    }

    return categories.map((category, index) => <ListItem key={index} title={category.name} />);
  }

  render(){
    return(
      <List>
        {this.renderLists()}
      </List>
    );
  };
}

const styles = {
  viewStyle: {
    padding: 10
  },
  innerViewStyle: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  textStyle: {
    color: '#ccc'
  }
}

export default CategoryList;
