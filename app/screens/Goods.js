import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
    } from "react-native";

class Goods extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>Goods</Text>
            </View>
        );
    }
}
export default Goods;

const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
    }
});