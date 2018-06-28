import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Animated,
    Dimensions
    } from "react-native";

import * as Animatable from 'react-native-animatable';


const { height, width } = Dimensions.get('window');



class Tabs extends Component{

    constructor(props){
        super(props);
            this.state = {
                order: 0,
                animation: "",
                displayState: "none",
                flexDirState: "column",
            }
        }

    componentWillMount(){
        this.blockWitdh = new Animated.Value(width*0.3)
    }

    increaseWidthOfBlock(){
        Animated.timing(this.blockWitdh,{
            toValue: width*0.95,
            duration: 500
        }).start()
    }

    decreaseWidthOfBlock(){
        Animated.timing(this.blockWitdh,{
            toValue: width*0.3,
            duration: 500
        }).start()
    }

    

    _onPressBlock(){
        if (this.state.order == 0){
            this.setState({order: -1})
            this.increaseWidthOfBlock()
            setTimeout(()=>{this.setState({animation: "fadeInDown"})}, 500)
            setTimeout(()=>{this.setState({displayState: "flex"})},500)
            this.setState({flexDirState: "row"})
        } else {
            this.setState({order: 0})
            this.setState({animation: "fadeOutUp"})
            setTimeout(()=>{this.decreaseWidthOfBlock()},500)
            
            
            setTimeout(()=>{this.setState({displayState: "none"})}, 500)
            
            this.setState({flexDirState: "column"})
        }
    }

    render(){
        return (
            <TouchableOpacity
                                onPress = {() => this._onPressBlock()}
                            >
                                <Animatable.View
                                    animation = "zoomIn"
                                    iterationCount = {1}
                                    style = {{
                                        width: this.blockWitdh,
                                        height: width*0.3,
                                        marginLeft: width*0.025,
                                        marginTop: 10,
                                        backgroundColor: this.props.color,
                                        alignItems: 'center',
                                        justifyContent: this.state.flexDirState == 'column'? 'center': 'flex-start',
                                        borderRadius: 7,
                                        order: this.state.order,
                                        zIndex: 999,
                                        flexWrap: 'wrap',
                                        flexDirection: this.state.flexDirState
                                    }}
                                    >
                                    <View
                                         
                                        style = {{
                                            width: width*0.2,
                                            height: width*0.2,
                                            borderRadius: width*0.2/2,
                                            backgroundColor: '#fff',
                                            marginLeft: this.state.order == 0? 0:10
                                        }}>
                                    </View>
                                    <Text style={{fontSize: 12, marginTop: 5, color: '#fff', marginLeft: this.state.order == 0? 0:10}}>
                                        {this.props.name}
                                    </Text>
                                </Animatable.View>
                                <Animatable.View 
                                    animation = {this.state.animation}
                                    iterationCount = {1}
                                    style = {{
                                        width: this.blockWitdh,
                                        height: 90,
                                        marginTop: 10,
                                        marginLeft: width*0.025,
                                        backgroundColor: '#bbb',
                                        borderRadius: 7,
                                        display: this.state.displayState,
                                    }}
                                >
                                </Animatable.View>
                </TouchableOpacity>
                            
        );
    }
}
export default Tabs;

const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
    }
});