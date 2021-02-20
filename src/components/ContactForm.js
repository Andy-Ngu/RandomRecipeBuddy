import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Textarea,
  Picker,
  Button,
  Text,
} from 'native-base';

const ContactForm = () => {
  // TODO: handle states, button press and connect to database

  return (
    <View style={styles.container}>
      <Container>
        <Content>
          <Text style={styles.header}>We're happy to help!</Text>
          <Form>
            <Label style={styles.label}>Email</Label>
            <Item regular>
              <Input />
            </Item>
            <Label style={styles.label}>Subject</Label>
            <Item regular>
              <Input />
            </Item>
            <Label style={styles.label}>Message</Label>
            <Textarea rowSpan={4} bordered />
          </Form>
        </Content>
      </Container>
      <View style={styles.buttonView}>
        <Button full style={styles.button} onPress={() => alert('Submitted!')}>
          <Text>Submit</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '75%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  header: {
    marginTop: 25,
    fontSize: 18,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  label: {
    marginTop: 25,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 0.8,
  },
  fields: {
    marginBottom: 5,
  },
  buttonView: {
    flex: 0.22,
    width: '65%',
    alignSelf: 'center',
  },
  button: {
    width: '100%',
  },
});

export default ContactForm;
