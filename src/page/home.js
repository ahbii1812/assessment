import _ from 'lodash';
import React, { useEffect } from 'react';
import { StyleSheet, View, BackHandler, Alert, FlatList } from 'react-native';
import RenderCard from '../components/cardComponent';
import custom from '../customization/customization';
import datastore from '../store/dataStore'

export default function Home(props) {

    const navigator = props.props.navigation;

    useEffect(() => {
        const backAction = () => {
            Alert.alert("Alert!", "Are you sure you want quit?", [
                {
                    text: "Cancel",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "YES", onPress: () => BackHandler.exitApp() }
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);

    renderContent = (item, index) => {
        item = item.item
        return (
            <View key={index} style={styles.cardContianer}>
                <RenderCard navigator={navigator} item={item} />
            </View>)

    }

    return <View style={styles.container}>
        <FlatList
            showsVerticalScrollIndicator={false}
            data={datastore.cardDetails}
            renderItem={(item, index) => renderContent(item, index)}
            keyExtractor={item => item.title}
        />
    </View>

}



const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        backgroundColor: custom.mainBg,
        justifyContent: "center",
        alignItems: "center"
    },
    cardContianer: {
        marginVertical: 15,
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    },
    iconStyle: {
        width: 65,
        height: 70,
        marginRight: 15,
        tintColor: 'white'
    },
    icon1Style: {
        width: 100,
        height: 100,
        marginRight: 15,
        tintColor: 'white'
    },
    carouselItem: {
        marginTop: 20,
        backgroundColor: "white",
        width: 350,
        height: 200,
        borderRadius: 10,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 6,
            height: 6
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5
    },
    emptyCarouselItem: {
        alignItems: "center",
        justifyContent: "center",
        borderColor: "white",
        borderStyle: "dashed",
        borderWidth: 3,
        width: 350,
        height: 200,
        borderRadius: 10,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 6,
            height: 6
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5
    }
})
