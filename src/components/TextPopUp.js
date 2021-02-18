import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Modal, Portal, Text, Button } from 'react-native-paper';

// Parent view must be wrapped in Provider tag from react-native-paper

const TextPopUp = ({ popUpText, buttonName }) => {
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <View>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.modalContainer}
        >
          <ScrollView>
            <Text>{popUpText}</Text>
          </ScrollView>
        </Modal>
      </Portal>
      <Button style={styles.button} color={'#6b73c9'} onPress={showModal}>
        {buttonName}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    alignSelf: 'center',
    width: '90%',
    height: '65%',
  },
  button: {
    marginTop: 20,
  },
});

export default TextPopUp;
