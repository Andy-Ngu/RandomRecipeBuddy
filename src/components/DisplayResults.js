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
            ? <Text style={styles.text}>Ingredients:</Text>
            : <Text style={styles.text}></Text>}
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

export default DisplayResults;
