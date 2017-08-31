import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Main from './Main';
import AddNewCategory from '../containers/AddNewCategory';
import AddCategoryItems from '../containers/AddCategoryItems';
import WelcomePage from './WelcomePage';
import LoginUserPage from '../containers/LoginUserPage';
import SignUpUser from '../containers/SignUpUser';
import firebase from 'firebase';

class RouterComponent extends React.Component {
  constructor(props) {
    super(props);
    // this.state={
    //   isLoggedIn: false
    // };
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDPAMADZLvc-hb-OMeJsvDyvCvn-JkBvO4",
      authDomain: "day-organizer.firebaseapp.com",
      databaseURL: "https://day-organizer.firebaseio.com",
      projectId: "day-organizer",
      storageBucket: "day-organizer.appspot.com",
      messagingSenderId: "1002264844662"
    });

    // firebase.onAuthStateChanged = user => {
    //   if (!user) {
    //     this.setState({isLoggedIn: false});
    //     //Actions.welcomePage();
    //   } else {
    //     this.setState({isLoggedIn: true});
    //   }
    // }
  }

  logOutUser(){
    firebase.auth().signOut().then(function() {
      console.log('signed out succesfully');
      Actions.welcomePage();
    }).catch(function(error) {
      // An error happened.
      console.log(error);
    });
  }

  addCategoryItemFromNav() {
    this.props.showAddItemToCategory(!this.props.addItemToCategoryFlag);
  }

  render() {
    return(
      <Router sceneStyle={{ backgroundColor: '#fff' }}>
        <Scene 
          navigationBarStyle={{backgroundColor: '#3F51B5', color: '#fff'}} 
          titleStyle={{color: '#fff'}}
          rightButtonTextStyle={{color: '#fff'}}
          leftButtonTextStyle={{color: '#fff'}}
          fontFamily='roboto'
          key='root'
        >
          <Scene
            key='welcomePage'
            title='Welcome'
            component={WelcomePage}
            onRight={()=>Actions.loginPage()}
            rightTitle='Login'
            initial
          />
          <Scene
            key='listItems'
            component={Main}
            title='All Your Items'
            leftTitle='Logout'
            onLeft={()=>this.logOutUser()}
            rightTitle='Add New'
            onRight={()=>Actions.addNewCategory()}
          />
          <Scene key='addNewCategory' component={AddNewCategory} title='Give It A Name' leftTitle='Back' onLeft={()=>Actions.pop()}/>
          <Scene key='loginPage' component={LoginUserPage} title='Login' leftTitle='Back' onLeft={()=>Actions.pop()} />
          <Scene key='signUpUser' component={SignUpUser} title='Sign Up' leftTitle='Back' onLeft={()=>Actions.pop()} />
          <Scene
            key='addCategoryItems'
            component={AddCategoryItems}
            title={this.props.currentCategory}
            leftTitle='Home'
            onLeft={()=>Actions.listItems()}
            rightTitle={ () => this.props.addItemToCategoryFlag ? 'Done' : 'Add Item' }
            onRight={this.addCategoryItemFromNav.bind(this)}
          />
        </Scene>
      </Router>
    );
  }
}

export default RouterComponent;
