import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Image} from 'react-native';

const ResultsScreen = ({navigation}) => {
    const cuisineText = navigation.getParam('cuisineInput');
    const ingredientsText = navigation.getParam('ingredientsInput');

    return (
        <View>
            <Text>{cuisineText}</Text>
            <Text>{ingredientsText}</Text>
        </View>
      );
};

const styles = StyleSheet.create ({

});

export default ResultsScreen;
