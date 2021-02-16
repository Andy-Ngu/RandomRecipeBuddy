import React, { useState } from 'react';
import {StyleSheet, Image, View} from 'react-native';;
import { IconButton, Colors, Appbar, Menu, Divider, Provider } from 'react-native-paper';

const HeaderBar = ({navigation}) => {
    const [visible, setVisible] = useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    return (
        <Appbar.Header style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo.png')}/>
            <Provider>
                <Menu
                    statusBarHeight={-25}
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={
                        <IconButton style={styles.menuButton}
                        icon="dots-vertical"
                        size={30}
                        onPress={openMenu}
                        />}>
                    <Menu.Item style={styles.menuItem} onPress={() => navigation.navigate('About', {navigation, title:'About'})} title="About" />
                    <Divider />
                    <Menu.Item style={styles.menuItem} onPress={() => navigation.navigate('Contact', {navigation, title:'Contact'})} title="Contact" />
                </Menu>
            </Provider>
        </Appbar.Header>
        );
};

const styles = StyleSheet.create({
    container:{
        alignSelf: 'center',
        backgroundColor: "#9298D6",
        height:60,
        paddingBottom:40,
        zIndex: 1,
    },
    logo:{
        resizeMode: 'contain',
        width: 200,
        height: 80,
        marginLeft:"20.5%",
    },
    menuButton:{
        alignSelf: 'center',
        marginBottom: 25,
        marginRight: 5,
    },
    menuItem: {
        height:34,
        width:40,
    },
});

export default HeaderBar;