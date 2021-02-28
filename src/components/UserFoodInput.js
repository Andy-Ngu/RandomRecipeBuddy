import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import Line from '../components/Line';
import CategoryList from '../components/CategoryList';
import { Searchbar } from 'react-native-paper';

import { CuisineData } from '../data/CuisineData';
import { FoodData } from '../data/FoodData';
import { IngredientData } from '../data/IngredientData';

const UserFoodInput = ({
  searchText,
  cuisineTitle,
  foodTitle,
  ingredientsTitle,
  navigation,
}) => {
  const [cuisineInput, setCuisineInput] = useState('');
  const [ingredientsInput, setIngredientsInput] = useState('');

  return (
    <View style={styles.categoriesContainer}>
      <View style={styles.searchBarContainer}>
        <Searchbar
          inputStyle={styles.searchInput}
          style={styles.searchBar}
          placeholder={searchText}
          value={cuisineInput}
          onChangeText={setCuisineInput}
          autoCapitalize="none"
          autoCorrect={false}
          onIconPress={() =>
            navigation.navigate('Results', { cuisineInput, ingredientsInput })
          }
          onSubmitEditing={() =>
            navigation.navigate('Results', { cuisineInput, ingredientsInput })
          }
        />
      </View>

      <View>
        <ScrollView style={styles.scrollCategories}>
          <Text style={styles.categoryHeader}>Categories</Text>
          <CategoryList foodData={CuisineData} title={cuisineTitle} />
          <Line />
          <CategoryList foodData={FoodData} title={foodTitle} />
          <Line />
          <CategoryList foodData={IngredientData} title={ingredientsTitle} />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    zIndex: 0,
  },
  searchBarContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  searchBar: {
    paddingTop: 3,
    paddingBottom: 3,
  },
  searchInput: {
    backgroundColor: '#fff',
    color: '#424242',
  },
  scrollCategories: {
    flexGrow: 0.78,
    marginBottom: 325,
  },
  categoryHeader: {
    fontSize: 18,
    marginLeft: 10,
    fontWeight: 'bold',
    marginBottom: 8,
    paddingTop: 10,
    paddingLeft: 10,
  },
});

export default withNavigation(UserFoodInput);
