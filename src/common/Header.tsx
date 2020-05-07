import React from "react";
import {StyleSheet, View, Image} from "react-native";

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10%',
    }
});

const Header = () => {
    return (
        <View style={styles.header}>
            <Image style={{width: 92, height: 25}}
                   source={{uri: 'https://globalsettings-api.staging-achilles.systems/labels/banners/online-pajak.svg'}}/>
        </View>
    );
}

export default Header;
