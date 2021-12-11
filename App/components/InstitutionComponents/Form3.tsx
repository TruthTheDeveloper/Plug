import React, {useEffect, useState, FC} from 'react';
import { Animated, Dimensions } from 'react-native';

import {DropDownSelector, LabeledInput} from '../index';

const {width} = Dimensions.get('window');

interface ModalProps {
    onSelect: () => void
}

const Form3: FC<ModalProps> = ({onSelect}):JSX.Element => {
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
                <DropDownSelector label='Select Polythecnic' label2='Federal Polythecnic Nekede' onClick={onSelect} />
                <LabeledInput label='Department' type={false} validationError='' value='' border='' borderC={(e: string) => console.log(e) } setValue={(e: string) => console.log(e)}  />
                <LabeledInput label='Level' type={false} validationError='' value='' border='' borderC={(e: string) => console.log(e) } setValue={(e: string) => console.log(e)}  />
        </Animated.View>
    )
};

export default Form3;