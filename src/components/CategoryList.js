import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation'
import CategoryData from './CategoryData';

const CategoryList = ({title, foodData, navigation}) => {
  if(!foodData.length){
    return null;
  }
  else{
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={foodData}
          KeyExtractor={(result) => result.id}
          renderItem={({item}) => {
            return (
                <TouchableOpacity onPress={() => navigation.navigate('Results', {cuisineInput: item.foodName, ingredientsInput: item.ingredients})}>
                  <CategoryData result={item}/>
                </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginLeft:15,
    fontWeight: 'bold',
    marginBottom: 5,
    paddingTop: 15,
    fontSize: 16,
    paddingLeft: 10,
  },
  container: {
    marginBottom: 10
  }
});

export default withNavigation(CategoryList);
