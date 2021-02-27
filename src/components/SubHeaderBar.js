import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

const SubHeaderBar = ({ navigation, title }) => {
  return (
    <Appbar style={styles.container}>
      <Appbar.BackAction onPress={() => navigation.pop()} />
      <Appbar.Content
        style={styles.header}
        titleStyle={styles.title}
        title={title}
      />
    </Appbar>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9298D6',
    height: '14%',
  },
  header: {
    flex: 0.8,
  },
  title: {
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#040101',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

export default SubHeaderBar;
