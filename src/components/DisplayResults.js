import React from 'react';
import { View, Text, StyleSheet, Button, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Spacer from '../components/Spacer';
import { cleanUrl, openURL, replaceLastWordOccurance, cleanIngredientsList} from '../helper/utility';

const DisplayResults = ({result, cuisineText, navigation, getResult}) => {
  let ingredientsList, parsedUrl = "";
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
          {result.href 
            ? <Text style={styles.imageSubtext}>From: {parsedUrl}</Text>
            : <Text style={styles.imageSubtext}></Text>}
          {result.ingredients 
            ? <Text style={styles.ingredientsHeading}>Ingredients:</Text>
            : <Text style={styles.ingredientsHeading}></Text>}
          <Text numberOfLines={4} ellipsizeMode='tail' style={styles.ingredientsBody}>{ingredientsList}</Text>
          <View style={styles.buttonsRowOne}>
            <Spacer>
              <Button 
                title="See recipe"
                onPress={() =>  openURL(result.href)}
              />
            </Spacer>
          </View>
          <View style={styles.buttonsRowTwo}>
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
  };

const styles = StyleSheet.create ({
    parentView:{
      alignItems: 'center',
      justifyContent: 'center',
      flex:0,
    },
    title: {
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: "center",
      fontSize: 25,
      paddingTop:20,
      paddingBottom:20,
      paddingLeft:30,
      paddingRight:30,
      fontWeight: 'bold',
      letterSpacing: 0.8,
      color: '#F3FDFB',
      fontFamily: 'sans-serif-light',
      textTransform: 'capitalize',
      height: '21%',
    },
    image: {
      alignSelf: 'center',
      height:'22%',
      width:'40%',
      borderRadius: 150 / 2,
      overflow: "hidden",
      borderWidth: 3,
      borderColor: "white",
    },
    imageSubtext:{
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: "center",
      fontSize: 12,
      paddingTop:10,
      color: '#F3FDFB',
      fontFamily: 'sans-serif',
      height:'5%',
    },
    ingredientsHeading: {
      fontSize: 16,
      textAlign: "left",
      paddingBottom:10,
      paddingTop:22,
      paddingLeft:30,
      paddingRight:30,
      textAlign: "auto",
      letterSpacing: 1,
      fontWeight: 'bold',
      color: '#F3FDFB',
      fontFamily: 'sans-serif-light',
      height:'9%',
    },
    ingredientsBody: {
      fontSize: 16,
      textAlign: "left",
      paddingBottom:20,
      paddingLeft:30,
      paddingRight:30,
      textAlign: "auto",
      letterSpacing: 0.6,
      color: '#F3FDFB',
      fontFamily: 'sans-serif-light',
      height:'16.5%',
    },
    buttonsRowOne: {
      flexDirection:"row",
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: "center",
    },
    buttonsRowTwo: {
      flexDirection:"row",
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: "center",
    },
  });

export default DisplayResults;
