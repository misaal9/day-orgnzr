import React from 'react';
import { View, Text, Button } from 'react-native';

export default AddNewButton = (props) => {
  return(
    <View style={styles.viewStyle}>
      <Button
        title={props.title}
        onPress={props.onPressAction.bind()}
        color='#44B4D5'
      />
    </View>
  );
};

const styles = {
  viewStyle: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  }
}
