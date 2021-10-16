/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import custom from './customization/customization';
import Home from './page/home';
import CardDetails from './page/cardDetails';


function HomePage({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="Home"
            sceneAnimationEnabled={false}
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" >
                {props => <Home props={props} />}
            </Stack.Screen>
            <Stack.Screen name="Card Details" >
                {props => <CardDetails props={props} />}
            </Stack.Screen>
        </Stack.Navigator>)

}

const Stack = createStackNavigator();

function App({ navigation }) {
    return (
        <NavigationContainer style={{ backgroundColor: custom.mainBg }} theme={{ colors: { background: custom.mainBg } }}>
            <StatusBar translucent backgroundColor="transparent"></StatusBar>
            <SafeAreaView style={{ backgroundColor: custom.mainBg, flex: 0 }} />
            <SafeAreaView style={{ backgroundColor: custom.mainBg, flex: 1 }}>
                <HomePage />
            </SafeAreaView>
        </NavigationContainer>
    );
}

export default App;
