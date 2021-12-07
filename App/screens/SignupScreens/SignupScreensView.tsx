import React, { FC, useState } from 'react';
import { View, Text, Animated, Button, Dimensions } from 'react-native';
import Emoji from 'react-native-emoji';

const {width} = Dimensions.get('window');

const SignupScreensView: FC = (props) => {

    return(
        <View>
            <Emoji name='gemini:' style={{fontSize: 40}} />
        </View>
    )
};

export default SignupScreensView