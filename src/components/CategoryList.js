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
    fontSize: 17,
    marginLeft:10,
    fontWeight: 'bold',
    marginBottom: 3,
    paddingTop: 20,
    paddingLeft: 10,
    color: 'slategray',
  },
  container: {
    marginBottom: 2
  }
});

export default withNavigation(CategoryList);
