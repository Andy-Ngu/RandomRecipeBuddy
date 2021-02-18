import React from 'react';
import { View, StyleSheet } from 'react-native';

const Line = () => {
  return <View style={styles.line}></View>;
};

const styles = StyleSheet.create({
  line: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1.2,
    marginLeft: 10,
    marginRight: 10,
  },
});
export default Line;
