import React from 'react';
import {StyleSheet } from 'react-native';
import UserFoodInput from '../components/UserFoodInput';
import {SafeAreaView } from 'react-native-safe-area-context';

const SearchScreen = ({navigation}) => {
    return (
        <SafeAreaView>
            <UserFoodInput
                cuisineText = "Enter a cuisine"
                ingredientsText = "Enter ingredients"
                submitButtonText = "Go"
            />
        </SafeAreaView>
        );
};

const styles = StyleSheet.create({});

export default SearchScreen;
