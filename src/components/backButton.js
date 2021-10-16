import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import custom from '../customization/customization'

export default function BackButton(props) {
    return <TouchableOpacity style={styles.buttonStyle} onPress={() => props.navigator.goBack()}>
        <Image style={styles.iconStyle} source={require("../icon/back_icon.png")} />
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    buttonStyle: { 
        height: 40, 
        width: 40, 
        borderRadius: 20, 
        backgroundColor: custom.white, 
        justifyContent: "center", 
        alignItems: "center" ,
        position: "absolute",
        top: 15,
        left: 15
    },
    iconStyle: {
        width: 30, 
        height: 30, 
        tintColor: custom.lightGreen 
    }
})