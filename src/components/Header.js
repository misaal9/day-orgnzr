import React from 'react';
import { View, Text } from 'react-native';

export default Header = (props) => {
  return(
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.title}</Text>
    </View>
  );
}

const styles = {
  viewStyle: {
    backgroundColor: '#2F74D0',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    marginTop: 15,
    padding: 15,
    fontSize: 18,
    color: 'white'
  }
}
