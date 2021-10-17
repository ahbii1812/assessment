import React, { Component } from "react";
import { Modal, StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import custom from "../customization/customization";

class PopUpModal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isVisible: false,
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <Modal visible={this.state.isVisible} animationType={"fade"} style={{ flex: 1, }} transparent={true}>
                <View style={styles.containerStyle}>
                    <View style={styles.modalStyle}>
                        <Text style={styles.titleStyle}>{this.props.title}</Text>
                        <View style={styles.scrollViewStyle}>
                            <ScrollView>
                                <Text style={styles.tncStyle}>{this.props.content}
                                </Text>
                            </ScrollView>
                        </View>
                        <TouchableOpacity onPress={() => this.cancelModal()} style={styles.buttonStyle} >
                            <Text style={styles.buttonTextStyle}>{this.props.buttonText}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </Modal>)
    }

    cancelModal = () => {
        this.props.onPressClose(true)
        this.setModalVisible(false);
    }

    setModalVisible = (visible) => {
        this.setState({ isVisible: visible });
    }

}

const styles = StyleSheet.create({
    titleStyle: {
        marginVertical: 20,
        fontSize: custom.largeTitleTextSize,
        fontWeight: "bold",
        color: custom.black
    },
    scrollViewStyle: {
        height: "70%",
        width: "90%",
        borderColor: custom.grey,
        borderWidth: 1,
        borderRadius: 8
    },
    containerStyle: {
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalStyle: {
        height: "60%",
        width: "80%",
        backgroundColor: custom.mainBg,
        borderRadius: 8,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center"
    },
    buttonStyle: {
        width: "90%", 
        height: 40, 
        backgroundColor: custom.pink,
        marginVertical: 20,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonTextStyle: {
        fontSize: custom.titleTextSize,
        color: custom.white,
        fontWeight: "500"
    },
    tncStyle: {
        fontSize: custom.contentTextSize,
        color: custom.grey,
        margin: 10,
        lineHeight: 20
    }
});


export default PopUpModal