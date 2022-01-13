/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Text } from 'react-native';
import { HomeScreen } from './components/home';
import { LoginScreen } from './components/login';


const config = {

    screens: {
        Login: 'Login',
        Home: 'Home/:userId'
    }
}

const linking = {
    prefixes: [],
    config
}


export const App = () => {

    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>

        </NavigationContainer>

    );
};

