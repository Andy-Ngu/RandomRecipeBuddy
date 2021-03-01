import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import recipePuppy from '../api/recipepuppy';
import { EmptyData } from '../data/EmptyData';
import DisplayResults from '../components/DisplayResults';

const ResultsScreen = ({ navigation }) => {
  const cuisineText = navigation.getParam('cuisineInput');
  const ingredientsText = navigation.getParam('ingredientsInput');
  const [result, setResult] = useState([]);

  const getResult = async (cuisineText) => {
    try {
      const response = await recipePuppy.get(
        '/?i=' + ingredientsText + '&q=' + cuisineText + '&onlyImages=1'
      );
      let resultsTotal = response.data.results.length;
      let randNumber =
        resultsTotal >= 1
          ? (randNumber = Math.floor(
              Math.random() * response.data.results.length
            ))
          : (randNumber = 0);
      setResult(response.data.results[randNumber]);
    } catch (err) {
      console.log('Something went wrong');
    }
  };

  useEffect(() => {
    getResult(cuisineText);
  }, []);

  if (!result) {
    return (
      <DisplayResults
        result={EmptyData}
        cuisineText={cuisineText}
        navigation={navigation}
        getResult={getResult}
      />
    );
  } else {
    return (
      <DisplayResults
        result={result}
        cuisineText={cuisineText}
        navigation={navigation}
        getResult={getResult}
      />
    );
  }
};

const styles = StyleSheet.create({});

export default ResultsScreen;
