import React, {useState} from 'react';
import {StyleSheet} from 'react-native'
//import {Text, Button, Input} from 'react-native-elements';
import {Text, Button, TextInput, View} from 'react-native';
import {withNavigation} from 'react-navigation'
import Spacer from '../components/Spacer';
//cuisineText, ingredientsText, onSubmit, submitButtonText, navigation
const UserFoodInput = ({ cuisineText, ingredientsText, onSubmit, submitButtonText, navigation}) => {
    const [cuisineInput, setCuisineInput] = useState('');
    const [ingredientsInput, setIngredientsInput] = useState('');

    // const [cuisineInput, setCuisineText] = useState('');
    // const [ingredientsText, setIngredientsText] = useState('');
    return(
        <View>
    <Spacer>
        <Text>{cuisineText}</Text>
    </Spacer>
    
    <TextInput 
        label = "Enter a cuisine"
        value = {cuisineInput}
        onChangeText = {setCuisineInput}
        autoCapitalize="none"
        autoCorrect={false}
    />

    <Spacer>
        <Text>{ingredientsText}</Text>
    </Spacer>
    <TextInput 
        label = "Enter ingredients"
        value = {ingredientsInput}
        onChangeText = {setIngredientsInput}
        autoCapitalize="none"
        autoCorrect={false}
    />
    < Spacer >
        <Button 
            title={submitButtonText}
            onPress={ () => navigation.navigate('Results', {cuisineInput, ingredientsInput})}
        />
    </Spacer>
        </View>
    );
};

const styles = StyleSheet.create({
});

export default withNavigation(UserFoodInput);