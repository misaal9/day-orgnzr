import React from 'react';
import { ScrollView, View, Text, TextInput } from 'react-native';
import AddNewButton from './AddNewButton';
import Spinner from './Spinner';
import { Actions } from 'react-native-router-flux';
import LoadedEmpty from './LoadedEmpty';

const styles = {
  outerViewStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 10
  },
  textInputStyle: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  viewStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
}

const colorType = [null, 'green', 'orange', 'blue', 'purple', 'brown'];

class AddCategoryItems extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
      addItem: false
    }
  }
  componentWillMount() {
    this.props.setAppState(null);
    this.props.fetchCategoryItems(this.props.currentCategory);
  }

  renderCategoryItems() {
    // if (!this.props.currentCategoryItems.length) {
    //   return(
    //     <LoadedEmpty />
    //   );
    // }
    return this.props.currentCategoryItems.map((item, index) => {
      return(
        <Text
          key={index}
          style={{
            marginRight: 10,
            marginLeft: 10,
            fontSize: 10*item.size,
            color: colorType[item.size] }}
          >
          {item.text}
        </Text>
      );
    })
  }

  addItemToList() {
    if (this.state.text.trim()) {
      this.props.addItemToList(this.props.currentCategory, this.state.text);
      this.setState({text: ''});
    }
  }

  renderAddItemSection() {
    if (this.props.addItemToCategoryFlag) {
      return (
        <View>
          <TextInput
            style={styles.textInputStyle}
            value={this.state.text}
            placeholder='Add Something New'
            onChangeText={text=>this.setState({text})}
            clearButtonMode='unless-editing'
            selectTextOnFocus={true}
            autoCorrect={false}
          />
          <AddNewButton title={'Add New Item'} onPressAction={this.addItemToList.bind(this)}/>
        </View>
      );
    }
  }

  render() {
    if (!this.props.currentAppLoadingState) {
        return (
          <Text>Loading saved items...</Text>
        );
    }

    return(
      <View style={styles.outerViewStyle}>
        <View style={styles.viewStyle}>
          { this.renderCategoryItems() }
        </View>

        { this.renderAddItemSection() }

      </View>
    );
  };
};

export default AddCategoryItems;
