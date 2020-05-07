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
            <Image style={{width: '92px', height: '25px'}}
                   source={{uri: 'https://globalsettings-api.staging-achilles.systems/labels/banners/online-pajak.svg'}}/>
        </View>
    );
}

export default Header;
