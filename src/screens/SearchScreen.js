import React, {useContext} from 'react';
import {View, StyleSheet, Text } from 'react-native';
import UserFoodInput from '../components/UserFoodInput';
//import {Context as AuthContext} from '../context/AuthContext';

const SearchScreen = ({navigation}) => {
    //const { state, getData} = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <UserFoodInput
                cuisineText = "Enter a cuisine"
                ingredientsText = "Enter ingredients"
                submitButtonText = "Go"
            />
        </View>);
};

//onSubmit = {getData}
const styles = StyleSheet.create({});

export default SearchScreen;
