import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//components
import HomeScreenContainer from '../../screens/HomeScreen/index';

const { height } = Dimensions.get('window')

const Home = () => {
    return(
        <View style={{backgroundColor: 'red', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home</Text>
        </View>
    )
}

const Profile = () => {
    return(
        <View style={{backgroundColor: 'red', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Profile</Text>
        </View>
    )
}

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return(
        <View style={{height: height }}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}} >
                    <Stack.Screen name="Home" component={HomeScreenContainer} />
                    <Stack.Screen name="Profile" component={Profile} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
};

export default Navigator