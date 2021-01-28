import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import UserFoodInput from '../components/UserFoodInput';
import {SafeAreaView } from 'react-native-safe-area-context';
import { IconButton, Colors } from 'react-native-paper';

const SearchScreen = ({navigation}) => {
    return (
        <SafeAreaView>
            <View style={styles.header}>
                <Image style={styles.logo} source={require('../assets/logo.png')}/>
                <IconButton style={styles.menuButton}
                    icon="menu"
                    size={33}
                    onPress={() => console.log('Pressed')}
                />
            </View>
            <UserFoodInput
                searchText = "Search a cuisine, food, or ingredient"
                cuisineTitle = "Search by Cuisine"
                foodTitle = "Search by Food"
                ingredientsTitle = "Search by Ingredient"
            />
        </SafeAreaView>
        );
};

const styles = StyleSheet.create({
    logo:{
        resizeMode: 'contain',
        width: 260,
        height: 90,
        marginLeft:30,
    },
    header:{
        alignSelf: 'center',
        flexDirection:"row",
        marginTop: 5,
        marginBottom: 15,
    },
    menuButton:{
        alignSelf: 'center',
        marginBottom: 20,
    }
});

export default SearchScreen;
