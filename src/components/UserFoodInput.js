import React, {useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native'
import {Text, Button, TextInput, View, TouchableOpacity, Image} from 'react-native';
import {withNavigation} from 'react-navigation'
import { Ionicons } from '@expo/vector-icons';
import Spacer from '../components/Spacer';
import CategoryList from '../components/CategoryList';

import { CuisineData } from '../data/CuisineData';
import { FoodData } from '../data/FoodData';
import { IngredientData } from '../data/IngredientData';

const UserFoodInput = ({ searchText, cuisineTitle, foodTitle, ingredientsTitle, navigation}) => {
    const [cuisineInput, setCuisineInput] = useState('');
    const [ingredientsInput, setIngredientsInput] = useState('');

    return(
        <View>
            <Image style={styles.logo} source={require('../assets/logo.png')}/>
            <View style={styles.searchBackground}>
                <TextInput  
                    style={styles.userInput}
                    placeholder={searchText}
                    value = {cuisineInput}
                    onChangeText = {setCuisineInput}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <TouchableOpacity
                    style={styles.searchButton}
                    onPress={ () => navigation.navigate('Results', {cuisineInput, ingredientsInput})}>
                        <Ionicons name="ios-search"  style={styles.icon}/>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <CategoryList foodData={CuisineData} title={cuisineTitle}/>
                <CategoryList foodData={FoodData} title={foodTitle}/>
                <CategoryList foodData={IngredientData} title={ingredientsTitle}/>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    logo:{
        paddingTop: 20,
        marginTop: 15,
        marginBottom: 15,
        alignSelf: 'center',
        width: 325,
        height: 150,
    },
    searchBackground: {
        marginTop:15,
        backgroundColor: '#F0EEEE',
        height: 60,
        borderRadius: 5,
        marginHorizontal:15,
        flexDirection: 'row',
        marginBottom: 30
    },
    searchButton:{
        backgroundColor:'#98D692',
    },
    icon: {
        padding: 17,
        fontSize: 25,
        alignSelf: 'center',
        marginHorizontal: 10,
        color: '#fff',
    },
    userInput: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        backgroundColor: '#fff',
        color: '#424242',
    },
});

export default withNavigation(UserFoodInput);