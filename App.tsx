import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import InvoicesListView from './src/invoices/InvoiceView'
import CreateForm from "./src/create/CreateForm";

function SettingsScreen() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

export default function App() {
    return (

        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: '#AE2125',
                    inactiveTintColor: '#AE2125',
                }}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;

                        if (route.name === 'New Invoice') {
                            iconName = focused ? 'ios-create' : 'md-create';
                        } else if (route.name === 'Draft List') {
                            iconName = focused ? 'ios-list-box' : 'ios-list';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color}/>;
                    },
                })}
            >
                <Tab.Screen name="New Invoice" component={CreateForm}/>
                <Tab.Screen name="Draft List" component={InvoicesListView}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
