import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Tile } from 'react-native-elements';

export default class WelcomePage extends React.Component {
    static navigationOptions = {
        headerLeft: null
    }

    render() {    
        return(
            <ScrollView>
                <Tile 
                    contentContainerStyle={{backgroundColor: 'blue'}}
                    title="Use this to organize and plan things to do in a more visual way"
                    featured
                    caption="Who is this for?"
                />
                <Tile 
                    contentContainerStyle={{backgroundColor: 'blue'}}
                    title="Add a category that best describes the reason to create this group"
                    featured
                    caption="How do I get started?"
                />
                <Tile 
                    contentContainerStyle={{backgroundColor: 'blue'}}
                    title="Inside the category start adding new items what are on top of your mind"
                    featured
                    caption="What's next?"
                />
                <Tile
                    containerStyle={styles.color.blue}
                    title="Prioritise them by keeping most important ones right there. Keep other ones not so dominant."
                    featured
                    caption="Priority?"
                />
                <Tile
                    containerStyle={styles.color.blue}
                    title="Once done, mark it down so it is out of your way. Mark up the items that were low priority, you want to take up now."
                    featured
                    caption="Complete?"
                />
                <Tile
                    contentContainerStyle={{height: 20}}
                    title="Login, so you can save your lists and come back anytime you want."
                    featured
                    caption="Login"
                />
            </ScrollView>
        );
    }
}

const styles = {
    tileStyle: {
        flex: 1
    },
    color: {
        blue: {
            backgroundColor: '#4985D6'
        } ,
        green: {
            backgroundColor: '#7BCAE1'
        } ,
        pink: {
            backgroundColor: '#E697E6'
        } ,
        lightGreen: {
            backgroundColor: '#7DFDD7'
        } ,
        yellow: {
            backgroundColor: '#FFFFC8'
        } ,
        red: {
            backgroundColor:  '#FFBBBB'
        }
    }
}