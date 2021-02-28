import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from 'react-native-paper';
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
    <SafeAreaView style={styles.parentView}>
      <View style={styles.cardTitleContainer}>
        <Card style={styles.cardTitle}>
          <Card.Content>
            <Text style={styles.title}>{result.title}</Text>
          </Card.Content>
        </Card>
      </View>
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
      <Card style={styles.cardIngredients}>
        <Card.Content>
          {result.ingredients ? (
            <Text style={styles.ingredientsHeading}>Ingredients:</Text>
          ) : (
            <Text style={styles.ingredientsHeading}></Text>
          )}
          <Text
            numberOfLines={5}
            ellipsizeMode="tail"
            style={styles.ingredientsBody}
          >
            {ingredientsList}
          </Text>
        </Card.Content>
      </Card>

      <View style={styles.buttonsRow}>
        <Spacer>
          <Button
            style={styles.buttonsPrimary}
            color="#6770c6"
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
            color="#6770c6"
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
            color="#6770c6"
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
    backgroundColor: '#F5F5F5',
    height: '100%',
  },
  cardTitleContainer: {
    justifyContent: 'center',
    height: '18%',
    width: '90%',
    alignSelf: 'center',
  },
  cardTitle: {},
  cardIngredients: {
    height: '28%',
    width: '90%',
    alignSelf: 'center',
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 23,
    fontWeight: 'bold',
    letterSpacing: 0.8,
    color: '#6770c6',
    fontFamily: 'sans-serif-light',
    textTransform: 'capitalize',
  },
  image: {
    alignSelf: 'center',
    height: 125,
    width: 125,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 8,
    borderColor: 'white',
    marginBottom: 12,
    marginTop: 12,
  },
  imageSubtext: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 12,
    color: '#000000',
    fontFamily: 'sans-serif',
    height: '5%',
  },
  ingredientsHeading: {
    fontSize: 16,
    textAlign: 'left',
    paddingBottom: 10,
    paddingLeft: 10,
    textAlign: 'auto',
    letterSpacing: 1.2,
    fontWeight: 'bold',
    color: '#6770c6',
    fontFamily: 'sans-serif-light',
  },
  ingredientsBody: {
    fontSize: 16,
    textAlign: 'left',
    paddingRight: 5,
    paddingLeft: 10,
    textAlign: 'auto',
    letterSpacing: 0.2,
    color: '#000000',
    fontFamily: 'sans-serif-light',
  },
  buttonsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: '10.5%',
  },
  buttonsPrimary: {
    marginTop: 5,
    paddingTop: 2,
    paddingBottom: 2,
  },
  buttonsSecondary: {
    paddingRight: 5,
    paddingLeft: 5,
  },
});

export default DisplayResults;
