import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, FlatList, Text } from 'react-native'
import BackButton from '../components/backButton';
import custom from '../customization/customization';
import { SharedElement } from 'react-navigation-shared-element';
import RadioGroup from 'react-native-radio-buttons-group';
import ShowToast from '../components/toast';

export default function Assessmemt(props) {
    const item = props.route.params
    const navigator = props.navigation
    const [radioButtons, setRadioButtons] = useState([])

    useEffect(() => {
        let list = [];
        item.questionsList?.map((item) => {
            list.push(item.options)

        })
        setRadioButtons(list)
    }, [])

    function renderContent(data) {
        return (
            <View key={data.index} style={{ width: "100%", margin: 5, marginTop: data.index == 0 ? 20 : null }}>
                <Text style={styles.questionsTitle}>{data.item.title}</Text>
                <View>
                    {renderRadioGroup(data.item.options, data.index)}
                </View>
            </View>
        )
    }

    function renderRadioGroup(item, index) {
        if (radioButtons[index] != undefined) {
            return (
                <RadioGroup
                    containerStyle={{ alignItems: "flex-start" }}
                    key={item => item.id}
                    radioButtons={radioButtons[index]}
                />
            );
        }
        return null
    }

    function onHandleSubmit() {
        if (matchSelectedOptions()) {
            resetRadioButton();
            ShowToast.showShortCenter("Assessment Submitted!!!")
            setTimeout(() => {
                navigator.popToTop();
            }, 300);
        } else {
            ShowToast.showShortCenter("Complete all questions to continue...")
        }

    }

    function resetRadioButton() {
        radioButtons.map((item) => {
            item.map(data => {
                if (data.selected) {
                    data.selected = false;
                }
            })
        })
    }

    function matchSelectedOptions() {
        let newArr = []
        radioButtons.map((data, index) => {
            data.map(o => {
                if (o.selected == true) {
                    newArr.push({ "title": item.questionsList[index].title, "selected": o.label })
                }
            })

        })

        if (newArr.length == item.questionsList.length) {
            console.log("Submitted details == ", newArr)
            return true
        } else {
            return false
        }
    }

    const RenderButton = () => {
        return (
            <View style={{ width: "100%", justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                <TouchableOpacity
                    onPress={() => { onHandleSubmit(); }}
                    style={styles.buttonContainerStyle}>
                    <Text style={styles.buttonTextStyle}>Submit</Text>
                    <Image style={{ marginLeft: 5, width: 20, height: 20 }} source={require("../icon/enter_icon.png")}></Image>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={{ height: "100%", width: "100%", backgroundColor: custom.mainBg }}>
            <SharedElement id={item.id} style={{ width: "100%", height: "25%", backgroundColor: custom.mainBg }}>
                <Image
                    overflow={"hidden"}
                    style={{ width: "100%", height: "100%", backgroundColor: custom.mainBg }}
                    source={item.icon} />
            </SharedElement>
            <View style={{ width: "100%", height: "70%", marginTop: 5 }}>
                <Text style={styles.titleStyle}>Questions</Text>
                <View style={styles.questionsContainer}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={item.questionsList ? item.questionsList : null}
                        renderItem={(data, index) => renderContent(data, index)}
                        key={item => item.id}
                    />
                </View>
                <RenderButton />
            </View>
            <BackButton navigator={navigator}></BackButton>
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: custom.largeTitleTextSize,
        color: custom.black,
        fontWeight: "bold",
        marginVertical: 5,
        marginLeft: 10
    },
    questionsContainer: {
        height: "80%",
        marginHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: custom.grey
    },
    buttonContainerStyle: {
        width: "90%",
        height: 50,
        borderWidth: 1,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderColor: "transparent",
        backgroundColor: custom.pink
    },
    buttonTextStyle: {
        fontSize: custom.titleTextSize,
        color: custom.white
    },
    questionsTitle: {
        fontSize: custom.titleTextSize,
        color: custom.black
    }
})