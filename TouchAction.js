
import  React,{ Component } from 'react';

import { TouchableHighlight,Text} from 'react-native';

export default class MyButton extends Component{
    _onPressButton() {
        console.log("You tapped the button!");
    }
    render(){
        return(
            <TouchableHighlight onPess ={this._onPressButton} style = {{flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',}}>
                <Text style = {{backgroundColor:'red'}} >Button</Text>
            </TouchableHighlight>
        );
    }
}