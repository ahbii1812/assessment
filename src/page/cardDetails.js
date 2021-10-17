import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import BackButton from '../components/backButton';
import custom from '../customization/customization';
import moment from 'moment';
import CheckBox from '@react-native-community/checkbox';
import PopUpModal from '../components/popUpModal'
import datastore from '../store/dataStore';
import { SharedElement } from 'react-navigation-shared-element';

export default function CardDetails(props) {
    const navigator = props.navigation;
    const item = props.route.params
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const RenderStatus = () => {
        if (item.status.toUpperCase() == "ONLINE") {
            return <View style={[styles.statusStyle, { borderColor: custom.lightGreen }]}>
                <Text style={[styles.statusTextStyle, { color: custom.lightGreen }]}>
                    ONLINE
                </Text>
            </View>
        } else {
            return <View style={[styles.statusStyle, { borderColor: custom.grey }]}>
                <Text style={[styles.statusTextStyle, { color: custom.grey }]}>
                    OFFLINE
                </Text>
            </View>
        }
    }

    const RenderContent = () => {
        return (
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                <RenderMinorBlock type={"timeToSpend"} />
                <RenderMinorBlock type={"getPoints"} />
                <RenderMinorBlock type={"retakeOnDate"} />
            </View>
        )
    }

    const RenderMinorBlock = (props) => {
        let text = ""
        let icon = ""
        if (props.type == "getPoints") {
            text = (
                <Text style={styles.contentText1}>
                    {"Get\n"}
                    <Text style={styles.contentText}>
                        {item.getPoints}
                    </Text>
                    <Text style={styles.contentText2}>
                        {" points"}</Text>
                </Text>)
            icon = require("../icon/points.png")
        }
        else if (props.type == "timeToSpend") {
            text = (
                <Text style={styles.contentText1}>
                    {"Spend approx.\n"}
                    <Text style={styles.contentText}>
                        {item.timeToSpend}
                    </Text>
                    <Text style={styles.contentText2}>
                        {" minutes"}</Text>
                </Text>)
            icon = require("../icon/timer.png")
        }
        else {

            let month = moment(item.retakeDate, 'DD/MM/YYYY').format('MMMM')
            month = month.slice(0, 3)
            let date = moment(item.retakeDate, 'DD/MM/YYYY').format('DD')
            let year = moment(item.retakeDate, 'DD/MM/YYYY').format('YYYY')
            let newDate = date + " " + month + ", "

            text = (
                <Text style={styles.contentText1}>
                    {"Retake for points on\n"}
                    <Text style={styles.contentText}>
                        {newDate}
                    </Text>
                    <Text style={styles.contentText2}>
                        {year}
                    </Text>
                </Text>)
            icon = require("../icon/calender.png")
        }

        return (
            <View style={{ width: "49%", height: 80, flexDirection: "row", alignItems: "center" }}>
                <Image source={icon} resizeMode={"contain"} style={styles.iconStyle} />
                <Text>{text}</Text>
            </View>
        )
    }

    const RenderTnC = () => {
        return (
            <View style={styles.tncContainer}>
                <View style={{ width: "8%", justifyContent: "center", alignItems: "center" }}>
                    <CheckBox
                        boxType="square"
                        value={toggleCheckBox}
                        onCheckColor={custom.blue}
                        onTintColor={custom.blue}
                        tintColor={custom.blue}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        style={{ width: 25, height: 25 }} />
                </View>
                <Text style={[styles.contentText1, { marginLeft: 15 }]}>
                    {"I have read and agree to the "}
                    <Text>
                        <Text onPress={() => this.popUpModal.setModalVisible(true)} style={styles.tncTextStyle}>
                            {"terms and conditions"}
                        </Text>
                    </Text>
                </Text>

            </View>

        )
    }

    const RenderButton = () => {
        return (
            <View style={{ width: "100%", justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                <TouchableOpacity disabled={!toggleCheckBox} style={[styles.buttonContainerStyle, { backgroundColor: !toggleCheckBox ? 'rgba(238,33,108,0.5)' : custom.pink }]}>
                    <Text style={styles.buttonTextStyle}>Start assessment</Text>
                    <Image style={{ marginLeft: 5, width: 20, height: 20 }} source={require("../icon/enter_icon.png")}></Image>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={{ backgroundColor: custom.mainBg, height: "100%", width: "100%" }}>
            <SharedElement id={item.id} style={{ width: "100%", height: "30%", backgroundColor: custom.mainBg }}>
                <Image overflow={"hidden"} style={{ width: "100%", height: "100%", backgroundColor: custom.mainBg }} source={item.icon} />
            </SharedElement>
            <View style={{ width: "97%", height: "70%" }}>
                <View style={{ marginTop: 20, flexDirection: "row" }}>
                    <Text style={styles.mainTitle}>{item.title}</Text>
                    <RenderStatus />
                </View>
                <Text style={styles.descTextStyle}>{item.desc}</Text>
                <RenderContent />
                <RenderTnC />
                <RenderButton />
            </View>
            <PopUpModal ref={component => { this.popUpModal = component }}
                title={"Terms and Conditions"}
                content={datastore.termsAndCondition}
                buttonText={"I have read and understand"}
                onPressClose={setToggleCheckBox} />
            <BackButton navigator={navigator} />
        </View>)
}

const styles = StyleSheet.create({
    mainTitle: {
        fontSize: custom.largeTitleTextSize,
        fontWeight: "bold",
        width: "75%",
        marginLeft: 10,
    },
    statusStyle: {
        marginTop: 7,
        width: 70,
        borderWidth: 1.5,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    statusTextStyle: {
        fontSize: custom.statusTextSize,
        fontWeight: "bold"
    },
    descTextStyle: {
        marginVertical: 10,
        lineHeight: 20,
        fontSize: custom.contentTextSize,
        marginLeft: 10,
    },
    iconStyle: {
        width: 50,
        height: 30,
        tintColor: custom.blue
    },
    contentText: {
        fontSize: custom.largeTitleTextSize,
        color: custom.black,
        fontWeight: "500"
    },
    contentText1: {
        fontSize: custom.contentTextSize,
        color: custom.grey
    },
    contentText2: {
        fontSize: custom.contentTextSize,
        color: custom.black
    },
    tncContainer: {
        margin: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    tncTextStyle: {
        color: custom.pink,
        fontSize: custom.contentTextSize,

    },
    buttonContainerStyle: {
        width: "90%",
        height: 50,
        borderWidth: 1,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderColor: "transparent"
    },
    buttonTextStyle: {
        fontSize: custom.titleTextSize,
        color: custom.white
    }
})