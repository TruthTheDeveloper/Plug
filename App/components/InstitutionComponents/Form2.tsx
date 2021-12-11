import React, {useEffect, useState, FC} from 'react';
import { Animated, Dimensions } from 'react-native';

import {DropDownSelector, LabeledInput} from '../index';

const {width} = Dimensions.get('window');

interface ModalProps {
    onSelect: (e: string) => void
}

const Form2:FC<ModalProps> = ({onSelect}):JSX.Element => {
    const value = useState(new Animated.ValueXY({x: width/2, y: 0}))[0]

    useEffect(() => {
        Animated.timing(value, {
            toValue: {x: 0, y: 0},
            duration: 300,
            useNativeDriver: false
        }).start()
    },[])

    return(
        <Animated.View style={value.getLayout()}>
                <DropDownSelector label='Select College' label2='Alvan Ikoku College' onClick={() => onSelect('CollgeList')} />
                <LabeledInput label='Department' type={false} validationError='' value='' border='' borderC={(e: string) => console.log(e) } setValue={(e: string) => console.log(e)}  />
                <LabeledInput label='Level' type={false} validationError='' value='' border='' borderC={(e: string) => console.log(e) } setValue={(e: string) => console.log(e)}  />
        </Animated.View>
    )
};

export default Form2;