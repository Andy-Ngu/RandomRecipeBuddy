import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Button, Image, Linking} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import recipePuppy from '../api/recipepuppy';
import Spacer from '../components/Spacer';
import { cleanUrl, openURL, cleanIngredientsList, replaceLastWordOccurance} from '../helper/utility';

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

    useEffect(() => {
        getResult(cuisineText);
    }, []);

    let ingredientsList, parsedUrl = "";
    if(!result){
        return null;
      }
    else{
      if(result.href){
        parsedUrl = cleanUrl(result.href);
        ingredientsList = replaceLastWordOccurance(cleanIngredientsList(result.ingredients), ",", ", and");
      }

      return (
        <SafeAreaView>
          <Text style={styles.title}>{result.title}</Text>
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
            <Text style={styles.imageSubtext}>From: {parsedUrl}</Text>
            <Text style={styles.text}>Ingredients:</Text>
            <Text style={styles.subtext}>{ingredientsList}</Text>
            <Spacer>
              <Button
                title="See recipe"
                onPress={() =>  openURL(result.href)}
              />
            </Spacer>
            <View style={styles.bottomRowButtons}>
              <Spacer>
                <Button
                  title="Next recipe"
                  onPress={() => getResult(cuisineText)}
                />
              </Spacer>
              <Spacer>
                <Button
                  title="Back"
                  onPress={ () => navigation.pop()}
                />
              </Spacer>
            </View>
        </SafeAreaView>
      );
    }
};

const styles = StyleSheet.create ({
    parentView:{
      alignItems: 'center',
      justifyContent: 'center',
      flex:1
    },
    title: {
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: "center",
      fontSize: 25,
      paddingTop:30,
      paddingBottom:30,
      paddingLeft:30,
      paddingRight:30,
      fontWeight: 'bold',
      letterSpacing: 1.5,
      color: '#F3FDFB',
      fontFamily: 'sans-serif-thin'
    },
    image: {
      alignSelf: 'center',
      height:150,
      width:150,
      borderRadius: 150 / 2,
      overflow: "hidden",
      borderWidth: 3,
      borderColor: "white"
    },
    imageSubtext:{
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: "center",
      fontSize: 12,
      paddingTop:10,
      paddingBottom:40,
      color: '#F3FDFB',
    },
    text: {
      fontSize: 17,
      textAlign: "left",
      paddingBottom:10,
      paddingLeft:30,
      paddingRight:30,
      textAlign: "auto",
      letterSpacing: 1,
      fontWeight: 'bold',
      color: '#F3FDFB',
    },
    subtext: {
      fontSize: 16,
      textAlign: "left",
      paddingBottom:20,
      paddingLeft:30,
      paddingRight:30,
      textAlign: "auto",
      letterSpacing: 1,
      color: '#F3FDFB',
    },
    bottomRowButtons: {
      flexDirection:"row",
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: "center",
    },
  });

export default ResultsScreen;
