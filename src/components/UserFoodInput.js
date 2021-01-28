import React, {useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native'
import {TextInput, View, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation'
import { Ionicons } from '@expo/vector-icons';
import Line from '../components/Line';
import CategoryList from '../components/CategoryList';

import { CuisineData } from '../data/CuisineData';
import { FoodData } from '../data/FoodData';
import { IngredientData } from '../data/IngredientData';

const UserFoodInput = ({ searchText, cuisineTitle, foodTitle, ingredientsTitle, navigation}) => {
    const [cuisineInput, setCuisineInput] = useState('');
    const [ingredientsInput, setIngredientsInput] = useState('');

    return(
        <View>
            <View style={styles.searchBarBackground}>
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
            <ScrollView style={styles.scrollCategories}>
                <CategoryList foodData={CuisineData} title={cuisineTitle}/>
                <Line/>
                <CategoryList foodData={FoodData} title={foodTitle}/>
                <Line/>
                <CategoryList foodData={IngredientData} title={ingredientsTitle}/>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollCategories:{
        flexGrow: 0.87
    },
    searchBarBackground: {
        backgroundColor: '#F0EEEE',
        height: 60,
        borderRadius: 5,
        marginHorizontal:15,
        flexDirection: 'row',
        marginBottom: 15,
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