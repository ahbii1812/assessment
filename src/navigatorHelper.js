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
import {createSharedElementStackNavigator} from 'react-navigation-shared-element'
import Assessment from './page/assessment'


function HomePage({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="Home"
            sceneAnimationEnabled={false}
            screenOptions={{ headerShown: false,  gestureEnabled: false,}}>
            <Stack.Screen name="Home" component={Home}/>
                {/* {props => <Home props={props} />}
            </Stack.Screen> */}
            <Stack.Screen name="Card Details" component={CardDetails} sharedElements={(route) => {return [route.route.params.id]}}/>
                {/* {props => <CardDetails props={props} />}
            </Stack.Screen> */}
             <Stack.Screen name="Assessment" component={Assessment} sharedElements={(route) => {return [route.route.params.id]}}/>
        </Stack.Navigator>)

}

const Stack = createSharedElementStackNavigator();

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
