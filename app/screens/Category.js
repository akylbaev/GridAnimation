import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Dimensions,
    ScrollView,
    Animated,
    TouchableOpacity
    } from "react-native";

import * as Animatable from 'react-native-animatable';
import Tabs from './Components/Tabs';

const { height, width } = Dimensions.get('window');


class Category extends Component{

    

    render(){
        return (
            <View style={styles.container}>
                <ScrollView 
                    contentContainerStyle = {{flexDirection: 'row', flexWrap: 'wrap'}}>
                    <Tabs 
                        color = '#2ecc71'
                        name = 'Овощи и зелень'/>
                    <Tabs 
                        color = '#f1c40f'
                        name = 'Сыры и колбасы'/>
                    <Tabs 
                        color = '#e74c3c'
                        name = 'Мясо и птица'/>
                    <Tabs 
                        color = '#3498db'
                        name = 'Рыба и морепродукты'/>
                    <Tabs 
                        color = '#9b59b6'
                        name = 'Фрукты'/>
                    <Tabs 
                        color = '#f39c12'
                        name = 'Выпить'/>
                    <Tabs 
                        color = '#95a5a6'
                        name = 'Каши'/>
                </ScrollView>
            </View>
        );
    }
}
export default Category;

const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
    }
});