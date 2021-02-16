import React from 'react';
import {StyleSheet, Image, View, ScrollView} from 'react-native';
import {SafeAreaView } from 'react-native-safe-area-context';
import SubHeaderBar from '../components/SubHeaderBar';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
import Constants from 'expo-constants';
import PrivacyPolicy from '../data/PrivacyPolicy.json';
import TermsOfService from '../data/TermsOfService.json';
import TextPopUp from '../components/TextPopUp';

const AboutScreen = ({navigation}) => {
    const appVersion = Constants.manifest.version ;
    const title = navigation.getParam('title');

    return (
        <SafeAreaView style={styles.container}>
            <Provider>
            <SubHeaderBar navigation={navigation} title={title}/>
                <View style={styles.content}>
                    <Text style={styles.header}>Random Recipe Buddy</Text>
                    <Text style={styles.body}>App Version: {appVersion}</Text>
                    <Image style={styles.logo} source={require('../assets/spatula.png')}/>
                    <Text style={styles.body}>Made with love from Andy</Text>
                    <Text style={styles.copyright}>© 2021 Chai Bear Studios</Text>
                </View>
                <TextPopUp popUpText = {PrivacyPolicy.data} buttonName = "Privacy Policy"/>
                <TextPopUp popUpText = {TermsOfService.data} buttonName = "Terms of Service"/>
            </Provider>
        </SafeAreaView>
        );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#FFF",
        flex: 1,
        flexDirection: 'column',
    },
    content:{
        flex: .8,
        justifyContent:'center',
    },
    header:{
        alignSelf: 'center',
        color: "#040101",
        fontSize: 25,
        fontWeight: "bold",
    },
    logo:{
        resizeMode: 'contain',
        width: 250,
        height: 110,
        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 15,
    },
    body:{
        alignSelf: 'center',
        color: "#040101",
        fontSize: 17,
        marginBottom: 3,
        textAlign: 'left',
    },
    copyright:{
        alignSelf: 'center',
        color: "#040101",
        fontSize: 14,
        textAlign:"left",
    },
});

export default AboutScreen;
