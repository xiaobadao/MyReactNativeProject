
import React,{Component} from 'react';
import { Animated,Text } from 'react-native';



export default class AnimatedAPP extends Component{
    render(){
        return(
         <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue',
             justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
                <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
         </FadeInView>
        )
    }
}
 class FadeInView extends Component{
    constructor(props){
        super(props);
        this.state = {
            fadeAnim:new  Animated.Value(0),
        }
    }
    componentDidMount(){
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue:1,
            }
        ).start();
    }
    render(){
        return(
            <Animated.View
            style={{
                ...this.props.style,
                opacity:this.state.fadeAnim,
            }}

            >
                {this.props.children}

            </Animated.View>
        );
    }
}