import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import CategoryData from './CategoryData';

const CategoryList = ({ title, foodData, navigation }) => {
  if (!foodData.length) {
    return null;
  } else {
    return (
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>{title}</Text>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={foodData}
          KeyExtractor={(result) => result.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Results', {
                    cuisineInput: item.foodName,
                    ingredientsInput: item.ingredients,
                  })
                }
              >
                <CategoryData result={item} />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  listTitle: {
    fontSize: 17,
    marginLeft: 10,
    fontWeight: 'bold',
    marginBottom: 3,
    paddingTop: 10,
    paddingLeft: 10,
    color: 'slategray',
  },
  listContainer: {
    marginBottom: 8,
  },
});

export default withNavigation(CategoryList);
