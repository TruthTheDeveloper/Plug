import React, {useEffect, useState} from 'react';
import { Animated, Dimensions } from 'react-native';

import {DropDownSelector} from '../index';

const {width} = Dimensions.get('window');

const Form3 = () => {
    const value = useState(new Animated.ValueXY({x: width/5, y: 0}))[0]

    useEffect(() => {
        Animated.timing(value, {
            toValue: {x: 0, y: 0},
            duration: 300,
            useNativeDriver: false
        }).start()
    },[])

    return(
        <Animated.View style={value.getLayout()}>
                <DropDownSelector label='Select Polythecnic' label2='Federal Polythecnic Nekede' />
                <DropDownSelector label='Department' label2='Libary Science' />
                <DropDownSelector label='Level' label2='Nd1' />
        </Animated.View>
    )
};

export default Form3;