import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from '../Pages/Home'
import Games from "../Pages/Game";
import Plataforma from "../Pages/Plataforma";
import MyCollection from '../Pages/MyCollection'

const Drawer = createDrawerNavigator();

export default function Routes(){
    return(
            <Drawer.Navigator
                screenOptions={{
                    drawerLabelStyle:{marginLeft: -20},
                    drawerActiveBackgroundColor: '#198BD4',
                    drawerActiveTintColor: '#FFFFFF',
                    drawerInactiveTintColor: '#5C5C5C',
                    swipeEdgeWidth : 1000,
                }} 
            >
                <Drawer.Screen 
                    name="Home"
                    component={Home}
                    options={{
                        drawerIcon: ({ focused }) => (
                            <MaterialCommunityIcons name='home' size={32} color={focused ? '#FFFFFF' : '#343434'}/>
                        ),
                    }}
                />
                <Drawer.Screen 
                    name="Games"
                    component={Games}
                    options={{
                        drawerIcon: ({ focused }) => (
                            <MaterialCommunityIcons name='gamepad' size={32} color={focused ? '#FFFFFF' : '#343434'}/>
                        ),
                    }}
                />
                <Drawer.Screen 
                    name="Plataforma"
                    component={Plataforma}
                    options={{
                        drawerIcon: ({ focused }) => (
                            <MaterialCommunityIcons name='laptop' size={32} color={focused ? '#FFFFFF' : '#343434'}/>
                        ),
                    }}
                />
                <Drawer.Screen 
                    name="MyCollection"
                    component={MyCollection}
                    title='Minha Coleção'
                    options={{
                        drawerIcon: ({ focused }) => (
                            <MaterialCommunityIcons name='notebook' size={32} color={focused ? '#FFFFFF' : '#343434'}/>
                        ),
                    }}
                />
            </Drawer.Navigator>
    )
}