import React from 'react';
import { View, Text, TextInput} from 'react-native';
import { Button } from 'react-native-elements';

class AddNewCategory extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      text: ''
    };
    console.log('after initialising constructor');
    this.onContinueButtonPress = this.onContinueButtonPress.bind(this);
  }

  onContinueButtonPress() {
    const { text } = this.state;
    if (text.length) {
        this.props.setActiveCategory(text);
        this.props.addNewCategory(text);
    }
  }

  renderContinueButton() {
    if (this.state.text) {
      return (
        <Button title={'Continue'} onPress={this.onContinueButtonPress} />
      );
    }
  }

  render(){
    return(
      <View style={styles.viewStyle}>
        <Text style={styles.labelStyle}>What Is This List For?</Text>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Things to do today.."
          value={this.state.text}
          onChangeText={(text)=>this.setState({text: text})}
          clearButtonMode='unless-editing'
          selectTextOnFocus={true}
          autoCorrect={false}
        />
        <Button
            title='Continue'
            buttonStyle={styles.button}
            fontFamily='roboto'
            onPress={this.onContinueButtonPress.bind(this)}
        />
      </View>
    );
  }
};

const styles = {
  viewStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  labelStyle: {
    fontSize: 18
  },
  textInputStyle: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  button: {
    backgroundColor: '#009688',
    marginBottom: 20
},
}

export default AddNewCategory;
