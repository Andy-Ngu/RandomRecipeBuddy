import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Button, Image, Linking} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import recipePuppy from '../api/recipepuppy';
import Spacer from '../components/Spacer';

const ResultsScreen = ({navigation}) => {
    const cuisineText = navigation.getParam('cuisineInput');
    const ingredientsText = navigation.getParam('ingredientsInput');
    const [result,setResult] = useState([]);

    function openURL(url){
      return ( Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          console.log("Can't handle url: " + url);
        } else {
          return Linking.openURL(url);
        }
      })
      .catch((err) => console.error('An error occurred', err)));
    }

    function parseDomainFromUrl(url){
      let regEx = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img
      return url.match(regEx);
    }

    function trimWordsFromUrl(url){
      url = url + "";
      url = url.replace("http://", "");
      url = url.replace("https://", "");
      url = url.replace("www.", "");
      return capitalizeFirstLetterInWord(url);
    }

    function capitalizeFirstLetterInWord(s){
      return s[0].toUpperCase() + s.slice(1);
    }

    function cleanUrl(url){
      url = capitalizeFirstLetterInWord(trimWordsFromUrl(parseDomainFromUrl(url)));
      return url;
    }

    function cleanIngredientsList(text){
      text = capitalizeFirstLetterInWord(text);
      return text;
    }

    function replaceLastWordOccurance(text, WordToReplace, ReplaceWithWord){
      text = text + "";
      let lastIndex = text.lastIndexOf(WordToReplace);
      text = text.substring(0, lastIndex) + ReplaceWithWord + text.substr(lastIndex + 1);
      return text;
    }

    const getResult = async (cuisineText) => {
        try{
          const response = await recipePuppy.get("/?p=1&i=" + ingredientsText + "&q=" + cuisineText);

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
        let imageUri, ingredientsList, parsedUrl = "";
        if(result.thumbnail){
          imageUri = result.thumbnail;
        }
        else{
          imageUri = "../assets/errorNoFoodThumbnail.jpg";
        }
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
