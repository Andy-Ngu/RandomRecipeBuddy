import React, {useState, useEffect} from 'react';
import { StyleSheet } from 'react-native';
import recipePuppy from '../api/recipepuppy';
import { EmptyData } from '../data/EmptyData';
import DisplayResults from '../components/DisplayResults';

const ResultsScreen = ({navigation}) => {
  const cuisineText = navigation.getParam('cuisineInput');
  const ingredientsText = navigation.getParam('ingredientsInput');
  const [result,setResult] = useState([]);

  const getResult = async (cuisineText) => {
      try{
        const response = await recipePuppy.get("/?p=1&i=" + ingredientsText + "&q=" + cuisineText + '&onlyImages=1');
        let resultsTotal = response.data.results.length;
        let randomNumber = 0;
        if(resultsTotal >= 1){
          randomNumber = Math.floor(Math.random() * response.data.results.length); 
        }
        else{
          randomNumber = 0
        }
        setResult(response.data.results[randomNumber]);
      }
      catch (err){
        setErrorMessage('Something went wrong');
      }
  };

  useEffect(() => {
      getResult(cuisineText);
  }, []);

  if(!result){
    return (<DisplayResults result={EmptyData} cuisineText={cuisineText}/>)
    }
  else{
    return (<DisplayResults result={result} cuisineText={cuisineText}/>)
  }
};

const styles = StyleSheet.create ({
  });

export default ResultsScreen;
