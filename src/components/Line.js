import React from 'react';
import {View, StyleSheet} from 'react-native';

const Line = () => {
    return <View style = {styles.line}></View>
};

const styles = StyleSheet.create({
    line: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
    }
});
export default Line;