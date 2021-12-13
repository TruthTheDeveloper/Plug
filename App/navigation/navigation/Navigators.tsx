import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Icons
import Icons from 'react-native-vector-icons/Feather';
import Icons2 from 'react-native-vector-icons/Ionicons';

//components
import {HomeScreenContainer, NotificationScreenContainer} from '../../index';

//ROUTES
import { HOME, CHATS, NOTIFICATIONS, PROFILE } from '../ROUTE';

const { height } = Dimensions.get('window')

const Home = () => {
    return(
        <HomeScreenContainer />
    )
}

const Profile = () => {
    return(
        <View style={{backgroundColor: '#fff', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Profile</Text>
        </View>
    )
}

const Chat = () => {
    return(
        <View style={{backgroundColor: '#fff', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Chat</Text>
        </View>
    )
}

const Notifications = () => {
    return(
        <NotificationScreenContainer />
    )
}

const Tab = createBottomTabNavigator();

const Navigator = () => {
    return(
        <View style={{height: height }}>
            <NavigationContainer>
                <Tab.Navigator screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false
                }}>

                    <Tab.Screen name={HOME} component={Home} options={{
                        tabBarIcon:({focused}) => (
                            <Icons name='home' size={25} color={focused ? '#000': 'grey'} />
                        )
                    }}/>

                    <Tab.Screen name={CHATS} component={Chat} options={{
                        tabBarIcon:({focused}) => (
                            <Icons2 name='chatbubble-outline' size={25} color={focused ? '#000': 'grey'} />
                        )
                    }}/>

                    <Tab.Screen name={NOTIFICATIONS} component={Notifications} options={{
                        tabBarIcon:({focused}) => (
                            <Icons name='bell' size={25} color={focused ? '#000': 'grey'} />
                        )
                    }}/>

                    <Tab.Screen name={PROFILE} component={Profile} options={{
                        tabBarIcon:({focused}) => (
                            <Icons name='user' size={25} color={focused ? '#000': 'grey'} />
                        )
                    }}/>
                    
                </Tab.Navigator>
            </NavigationContainer>
        </View>
    )
};

export default Navigator