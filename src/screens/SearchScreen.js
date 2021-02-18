import React from 'react';
import { StyleSheet } from 'react-native';
import UserFoodInput from '../components/UserFoodInput';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderBar from '../components/HeaderBar';

const SearchScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <HeaderBar navigation={navigation} />
      <UserFoodInput
        searchText="Search for recipes"
        cuisineTitle="Cuisines"
        foodTitle="Entrees"
        ingredientsTitle="Ingredients"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
