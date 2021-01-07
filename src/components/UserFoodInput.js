import React, {useState} from 'react';
import {StyleSheet} from 'react-native'
import {Text, Button, TextInput, View, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation'
import { Ionicons } from '@expo/vector-icons';
import Spacer from '../components/Spacer';

const UserFoodInput = ({ cuisineText, ingredientsText, onSubmit, submitButtonText, navigation}) => {
    const [cuisineInput, setCuisineInput] = useState('');
    const [ingredientsInput, setIngredientsInput] = useState('');

    return(
        <View>
            <Spacer>
                <Text style = {styles.title}>Random Recipe Buddy</Text>
            </Spacer>
            
            <View style={styles.searchBackground}>
                <TextInput  
                    style={styles.userInput}
                    placeholder={cuisineText}
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

            <Spacer>
                <Text style = {styles.searchTitle}>Search by Cuisine</Text>
            </Spacer>
            <TextInput 
                label = "Enter ingredients"
                value = {ingredientsInput}
                onChangeText = {setIngredientsInput}
                autoCapitalize="none"
                autoCorrect={false}
            />

            <Spacer>
                <Text style = {styles.searchTitle}>Search by ingredient</Text>
            </Spacer>
            
            <TextInput 
                label = "Enter ingredients"
                value = {ingredientsInput}
                onChangeText = {setIngredientsInput}
                autoCapitalize="none"
                autoCorrect={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title:{
        paddingTop: 10,
        alignSelf: 'center',
        fontSize: 20,
    },
    searchTitle:{
        paddingTop: 10,
        fontSize: 16,
        paddingLeft: 10,
    },
    searchBackground: {
        marginTop:12,
        backgroundColor: '#F0EEEE',
        height: 60,
        borderRadius: 5,
        marginHorizontal:15,
        flexDirection: 'row',
        marginBottom: 10
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