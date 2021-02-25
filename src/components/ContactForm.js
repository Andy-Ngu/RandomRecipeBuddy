import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Textarea,
  Picker,
  Button,
} from 'native-base';
import axios from 'axios';
import { REACT_APP_FIREBASE_URL } from '@env';

const ContactForm = () => {
  // TODO: Add better alert messages
  const [emailInput, setEmailInput] = useState('');
  const [subjectInput, setSubjectInput] = useState('');
  const [messageInput, setmessageInput] = useState('');

  let validateForm = function () {
    const emailError = 'Please enter a valid email';
    const messageError = 'Please enter a Message';
    const isEmailValid = validateEmail(emailInput);
    const isMessageValid = messageInput;
    let isFormValid = isEmailValid && isMessageValid;
    let errorMessage = '';

    if (!isMessageValid) errorMessage = messageError;
    if (!isEmailValid) errorMessage = emailError;
    if (errorMessage) alert(errorMessage);

    return isFormValid;
  };

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  let submitForm = function () {
    if (validateForm(emailInput, subjectInput, messageInput)) {
      postResult(emailInput, subjectInput, messageInput);
      alert(
        'Thank you!' +
          '\n\n' +
          "We've received your message and will get back to you soon."
      );
    }
  };

  const postResult = async (emailInput, subjectInput, messageInput) => {
    const headers = { 'Content-Type': 'text/plain' };

    try {
      const params = JSON.stringify({
        Email: emailInput,
        Subject: subjectInput,
        Message: messageInput,
      });

      axios({
        method: 'post',
        url: REACT_APP_FIREBASE_URL,
        headers: headers,
        data: params,
      }).then((response) => {
        console.log('Success');
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Container>
        <Content>
          <Text style={styles.header}>We're happy to help!</Text>
          <Form>
            <Label style={styles.label}>Email</Label>
            <Item regular>
              <Input value={emailInput} onChangeText={setEmailInput} />
            </Item>
            <Label style={styles.label}>Subject</Label>
            <Item regular>
              <Input value={subjectInput} onChangeText={setSubjectInput} />
            </Item>
            <Label style={styles.label}>Message</Label>
            <Textarea
              rowSpan={4}
              bordered
              value={messageInput}
              onChangeText={setmessageInput}
            />
          </Form>
        </Content>
      </Container>
      <View style={styles.buttonView}>
        <Button full style={styles.button} onPress={submitForm}>
          <Text style={styles.buttonText}>Submit</Text>
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
    backgroundColor: '#6770c6',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default ContactForm;
