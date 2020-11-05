import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, SafeAreaView, Button, Image, Linking} from 'react-native';
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
      return url.match(regEx)
    }

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

        let parsedUrl = "";
        if(result.href){
          parsedUrl = parseDomainFromUrl(result.href);
        }

        return (
            <View>
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
                <Text style={styles.imageSubtext}>Source: {parsedUrl}</Text>
                <Text style={styles.text}>Ingredients: {result.ingredients}</Text>
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
    title: {
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: "center",
      fontSize: 18,
      paddingTop:30,
      paddingBottom:30,
      fontWeight: 'bold'
    },
    image: {
      alignSelf: 'center',
      height:175,
      width:175,
    },
    imageSubtext:{
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: "center",
      fontSize: 12,
      paddingTop:10,
      paddingBottom:40,
    },
    text: {
      fontSize: 15,
      textAlign: "center",
      paddingBottom:20,
    },
    bottomRowButtons: {
      flexDirection:"row",
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: "center",
    },
  });

export default ResultsScreen;
