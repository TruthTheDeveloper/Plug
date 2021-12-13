import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//components
import HomeScreenContainer from '../../screens/HomeScreen/index';
import { SafeAreaView } from 'react-native-safe-area-context';


// const Home = () => {
//     return(
//         <View style={{backgroundColor: 'red', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//             <Text>Home</Text>
//         </View>
//     )
// }

// const Profile = () => {
//     return(
//         <View style={{backgroundColor: 'red', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//             <Text>Profile</Text>
//         </View>
//     )
// }

// const Stack = createNativeStackNavigator();

const Navigator = () => {
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
            {/* <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Profile" component={Profile} />
                </Stack.Navigator>
            </NavigationContainer> */}
        </SafeAreaView>
    )
};

export default Navigator