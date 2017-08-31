import React from 'react';
import {View, Text} from 'react-native';

const LoadedEmpty = category => {
  return (
    <View style={styles.outerViewStyle}>
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Nothing to show, doug!</Text>
        <Text style={styles.textStyle}>Gotta add something!</Text>
      </View>
    </View>
  );
}

export default LoadedEmpty;

const styles = {
  outerViewStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  viewStyle: {
    textAlign: 'center'
  },
  textStyle: {
    color: 'gray'
  }
}
