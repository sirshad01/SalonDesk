


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import {
    Button,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';
import { AppointmentScreen } from './appointments';
import { SalesScreen } from './sales';



const Tab = createBottomTabNavigator();
export const HomeScreen: React.FC = observer(({ }) => {

    return (

        <Tab.Navigator>
            <Tab.Screen name="Appointments" component={AppointmentScreen} />
            <Tab.Screen name="Sales" component={SalesScreen} />
        </Tab.Navigator>


    );
});

