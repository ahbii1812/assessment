import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import custom from '../customization/customization';

export default function RenderCard(props) {
    const item = props.item;
    return (
        <TouchableOpacity style={styles.cardStyle} onPress={() => { props.navigator.push("Card Details", item) }}>
            <View style={{ width: "25%", justifyContent: "center", alignItems: "center" }}>
                <SharedElement id={item.id}>
                    <Image resizeMode={"cover"} source={item.icon} style={{ width: 75, height: 75, borderRadius: 8}} />
                </SharedElement>
            </View>
            <View style={{ width: "75%", flexDirection: "column" }}>
                <View style={[styles.textContainer, { justifyContent: "center" }]}>
                    <Text style={{ fontSize: custom.titleTextSize, fontWeight: "bold", color: custom.black,}}>{item.title}</Text>
                </View>
                <View style={[styles.textContainer, { flexDirection: "row" }]}>
                    <Text style={[styles.normalTextStyle, { width: "85%" }]}>{"Earn up to\n"}
                        <Text style={styles.pointTextStyle}>
                            {item.maxPoints + " "}
                        </Text>
                        pts
                    </Text>
                    <TouchableOpacity onPress={() => { props.navigator.push("Card Details", item) }}>
                        <Image style={styles.goIconStyle} source={require("../icon/enter_icon.png")}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        marginLeft: 5,
        height: "50%",
    },
    cardStyle: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.26,
        shadowRadius: 5,
        elevation: 14,
        height: 125,
        width: "95%",
        backgroundColor: custom.white,
        borderRadius: 8,
        justifyContent: "center",
        flexDirection: "row"
    },
    normalTextStyle: {
        color: custom.grey,
        fontSize: custom.contentTextSize
    },
    goIconStyle: {
        marginTop: 17,
        height: 20,
        width: 20,
        tintColor: custom.pink
    },
    pointTextStyle: {
        color: custom.lightGreen,
        fontSize: custom.titleTextSize,
        fontWeight: "bold"
    }
})
