import React from 'react';
import {View, Image, Text,StyleSheet} from 'react-native';

const CategoryData = ({result}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.imageUrl }}/>
      <Text style={styles.title}>{result.foodName ? result.foodName : result.ingredients}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    marginTop:10,
    marginBottom:12,
    marginLeft:14,
    marginRight:2,
  },
  image: {
    width:80,
    height:80,
    borderRadius: 4,
    borderRadius: 400 / 2,
    marginBottom: 5,
  },
  title:{
    fontSize: 14,
    alignSelf: 'center',
  }
});

export default CategoryData;
