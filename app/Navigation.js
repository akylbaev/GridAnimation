import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
    } from "react-native";
import {createStackNavigator} from 'react-navigation';

import Category from './screens/Category';
import Goods from './screens/Goods'

class Navigation extends Component{
    render(){
        return (
            <AppStackNavigator />
        );
    }
}

const AppStackNavigator = createStackNavigator({
    CategoryScreen: {
        screen: Category
    },
    GoodsScreen: {
        screen: Goods
    },
})
export default Navigation;
