import React, { useState } from 'react';
import {StyleSheet, Image, View} from 'react-native';;
import { IconButton, Colors, Appbar, Menu, Divider, Provider } from 'react-native-paper';

const HeaderBar = () => {
    const [visible, setVisible] = useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    return (
        <Appbar.Header style={styles.header}>
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
                    <Menu.Item style={styles.menuItem} onPress={() => console.log('Pressed About')} title="About" />
                    <Divider />
                    <Menu.Item style={styles.menuItem} onPress={() => console.log('Pressed Contact')} title="Contact" />
                </Menu>
            </Provider>
        </Appbar.Header>
        );
};

const styles = StyleSheet.create({
    header:{
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