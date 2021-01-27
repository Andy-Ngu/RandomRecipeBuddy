import React from 'react';
import {StyleSheet, Image} from 'react-native';
import UserFoodInput from '../components/UserFoodInput';
import {SafeAreaView } from 'react-native-safe-area-context';

const SearchScreen = ({navigation}) => {
    return (
        <SafeAreaView>
            <Image style={styles.logo} source={require('../assets/logo.png')}/>
            <UserFoodInput
                searchText = "Search a cuisine, food or ingredient"
                cuisineTitle = "Search by Cuisine"
                foodTitle = "Search by Food"
                ingredientsTitle = "Search by Ingredient"
            />
        </SafeAreaView>
        );
};

const styles = StyleSheet.create({
    logo:{
        paddingTop: 20,
        marginTop: 15,
        marginBottom: 15,
        alignSelf: 'center',
        resizeMode: 'contain',
        width: 375,
        height: 120,
    },
});

export default SearchScreen;
