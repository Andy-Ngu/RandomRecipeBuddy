import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, Paragraph} from 'react-native-paper';

const CategoryData = ({result}) => {
  return (
    <View style={styles.dataContainer}>
      <Card style={styles.card}>
        <Card.Cover style={styles.cardImage} source={{ uri: result.imageUrl }} />
        <Card.Content style={styles.cardBottomRow} >
          <Paragraph style={styles.cardText}>{result.foodName ? result.foodName : result.ingredients}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  dataContainer:{
    marginTop:10,
    marginLeft:14,
    marginRight:10,
    paddingBottom:10,
  },
  card: {
    elevation: 5,
    height : 125,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  cardImage: {
    width:135,
    height:90,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  cardBottomRow:{
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center', 
  },
  cardText:{
    fontSize: 16,
    paddingTop: 5,
  }
});

export default CategoryData;
