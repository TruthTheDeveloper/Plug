import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

//components
import HomeScreenContainer from '../../screens/HomeScreen/index';

const Navigator = () => {
    return(
        <NavigationContainer>
            <HomeScreenContainer />
        </NavigationContainer>
    )
};

export default Navigator