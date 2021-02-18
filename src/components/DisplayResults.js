import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Spacer from '../components/Spacer';
import {
  cleanUrl,
  openURL,
  replaceLastWordOccurance,
  cleanIngredientsList,
} from '../helper/utility';

const DisplayResults = ({ result, cuisineText, navigation, getResult }) => {
  let ingredientsList,
    parsedUrl = '';
  if (result.href) {
    parsedUrl = cleanUrl(result.href);
    ingredientsList = replaceLastWordOccurance(
      cleanIngredientsList(result.ingredients),
      ',',
      ', and'
    );
  }

  return (
    <SafeAreaView>
      <Text style={styles.title}>{result.title}</Text>
      {result.thumbnail ? (
        <Image source={{ uri: result.thumbnail }} style={styles.image} />
      ) : (
        <Image
          source={require('../assets/errorNoImage.png')}
          style={styles.image}
        />
      )}
      {result.href ? (
        <Text style={styles.imageSubtext}>From: {parsedUrl}</Text>
      ) : (
        <Text style={styles.imageSubtext}></Text>
      )}
      {result.ingredients ? (
        <Text style={styles.ingredientsHeading}>Ingredients:</Text>
      ) : (
        <Text style={styles.ingredientsHeading}></Text>
      )}
      <Text
        numberOfLines={4}
        ellipsizeMode="tail"
        style={styles.ingredientsBody}
      >
        {ingredientsList}
      </Text>
      <View style={styles.buttonsRow}>
        <Spacer>
          <Button
            style={styles.buttonsPrimary}
            accessibilityLabel="Recipe clicked"
            icon="send"
            mode="contained"
            onPress={() => openURL(result.href)}
          >
            See Recipe
          </Button>
        </Spacer>
      </View>
      <View style={styles.buttonsRow}>
        <Spacer>
          <Button
            style={styles.buttonsSecondary}
            accessibilityLabel="Back"
            icon="arrow-left"
            mode="contained"
            onPress={() => navigation.pop()}
          >
            Back
          </Button>
        </Spacer>
        <Spacer>
          <Button
            style={styles.buttonsSecondary}
            accessibilityLabel="Next"
            icon="arrow-right"
            mode="contained"
            onPress={() => getResult(cuisineText)}
          >
            Next
          </Button>
        </Spacer>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parentView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0,
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 25,
    paddingTop: 20,
    paddingRight: 30,
    paddingBottom: 20,
    paddingLeft: 30,
    fontWeight: 'bold',
    letterSpacing: 0.8,
    color: '#F3FDFB',
    fontFamily: 'sans-serif-light',
    textTransform: 'capitalize',
    height: '21%',
  },
  image: {
    alignSelf: 'center',
    height: '22%',
    width: '40%',
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'white',
  },
  imageSubtext: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 12,
    paddingTop: 10,
    color: '#F3FDFB',
    fontFamily: 'sans-serif',
    height: '5%',
  },
  ingredientsHeading: {
    fontSize: 16,
    textAlign: 'left',
    paddingTop: 22,
    paddingRight: 30,
    paddingBottom: 10,
    paddingLeft: 30,
    textAlign: 'auto',
    letterSpacing: 1,
    fontWeight: 'bold',
    color: '#F3FDFB',
    fontFamily: 'sans-serif-light',
    height: '9%',
  },
  ingredientsBody: {
    fontSize: 16,
    textAlign: 'left',
    paddingRight: 30,
    paddingBottom: 20,
    paddingLeft: 30,
    textAlign: 'auto',
    letterSpacing: 0.6,
    color: '#F3FDFB',
    fontFamily: 'sans-serif-light',
    height: '16.5%',
  },
  buttonsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  buttonsPrimary: {
    paddingTop: 2,
    paddingRight: 10,
    paddingBottom: 2,
    paddingLeft: 10,
  },
  buttonsSecondary: {
    paddingRight: 5,
    paddingLeft: 5,
  },
});

export default DisplayResults;
