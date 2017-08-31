import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

class ListItem extends React.Component {
  handleOnPress = () => {
    this.props.setActiveCategory(this.props.title);
    Actions.addCategoryItems();
  }

  render() {
    return(
      <TouchableHighlight style={styles.viewStyle} onPress={this.handleOnPress.bind(this)}>
        <View style={styles.innerViewStyle}>
          <View style={styles.circle}><Text>T</Text></View>
          <Text>{this.props.title}</Text>
          <View style={styles.arrow}><Text>></Text></View>
        </View>
      </TouchableHighlight>
    );
  };
}

const styles = {
  viewStyle: {
    height: 60,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    padding: 10
  },
  innerViewStyle: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  circle: {
    backgroundColor: 'cyan',
    color: 'blue',
    padding: 5,
    fontSize: 45,
    borderRadius: '100%',
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center'
  },
  arrow: {
    fontSize: 45,
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center'
  }
}

export default ListItem;
