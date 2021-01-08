import React from 'react';
import {StyleSheet } from 'react-native';
import UserFoodInput from '../components/UserFoodInput';
import {SafeAreaView } from 'react-native-safe-area-context';

const SearchScreen = ({navigation}) => {
    return (
        <SafeAreaView>
            <UserFoodInput
                searchText = "Search a cuisine, food or ingredient"
                cuisineTitle = "Search by Cuisine"
                foodTitle = "Search by Food"
                ingredientsTitle = "Search by Ingredient"
            />
        </SafeAreaView>
        );
};

const styles = StyleSheet.create({});

export default SearchScreen;
