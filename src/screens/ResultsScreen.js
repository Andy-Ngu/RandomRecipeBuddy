import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Image} from 'react-native';
import recipePuppy from '../api/recipepuppy';

const ResultsScreen = ({navigation}) => {
    const cuisineText = navigation.getParam('cuisineInput');
    const ingredientsText = navigation.getParam('ingredientsInput');
    const [result,setResult] = useState([]);

    const getResult = async (cuisineText) => {

        try{
          const response = await recipePuppy.get("/?p=1&i=" + ingredientsText + "&q=" + cuisineText);

          // recheck logic later
          let resultsTotal = response.data.results.length;
          let randomNumber = 0;
          if(resultsTotal >= 1){
            randomNumber = Math.floor(Math.random() * response.data.results.length); 
            console.log(randomNumber);
            console.log(response.data.results.length);
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

    console.log(result);
    console.log(typeof result);
    useEffect(() => {
        getResult(cuisineText);
    }, []);

    if(!result){
        return null;
      }
      else{

        let imageUri = "";
        if(result.thumbnail){
          imageUri = result.thumbnail;
        }
        else{
          imageUri = "../assets/errorNoFoodThumbnail.jpg";
        }

        return (
            <View>
              <Text>{result.title}</Text>
              {result.thumbnail
                  ? <Image
                    source={{uri: result.thumbnail}} 
                    style={styles.image} 
                    />
                  : <Image
                  source={require('../assets/errorNoFoodThumbnail.jpg')}
                    style={styles.image} 
                    />
                }
                <Text>The Cuisine you entered is {cuisineText}</Text>
                <Text>The Ingredient you entered is {ingredientsText}</Text>
                <Text>The result href is {result.href}</Text>
                <Text>The result ingredients is {result.ingredients}</Text>
                <Text>The result thumbnail is {result.thumbnail}</Text>
                <Text style={styles.text}>{result.name}</Text>
            </View>
          );
      }
};

const styles = StyleSheet.create ({
    parentView:{
      alignItems: 'center',
      justifyContent: 'center',
      flex:1
    },
    image: {
      height:175,
      width:175,
    },
    text: {
      fontWeight:'bold',
      fontSize: 25,
      textAlign: "center",
      paddingBottom:20
    },
  });

export default ResultsScreen;
