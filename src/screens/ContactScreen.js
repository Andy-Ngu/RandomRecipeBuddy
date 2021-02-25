import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SubHeaderBar from '../components/SubHeaderBar';
import ContactForm from '../components/ContactForm';

const ContactScreen = ({ navigation }) => {
  const title = navigation.getParam('title');

  return (
    <SafeAreaView style={styles.container}>
      <SubHeaderBar navigation={navigation} title={title} />
      <ContactForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ContactScreen;
