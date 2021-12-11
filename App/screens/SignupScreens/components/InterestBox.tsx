import React, {FC, useState} from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { red } from '../../../config/colors';

interface InterestProps {
    small: boolean,
    name: string,
    interests: {[index: string]:any},
    postInterest: (e: string) => void
}

const InterestBox: FC <InterestProps> = ({small, name,postInterest}): JSX.Element => {
    const [selected, setSelected] = useState(false);

    const addInterest = () => {
        setSelected(true);
        postInterest(name);
    }

    const removeInterest = () => {
        setSelected(false)
    }

    const box1 = (
        <TouchableWithoutFeedback onPress={addInterest}>
            <View style={[styles.container, small && {width: '40%'}]}>
                <Text style={styles.text}>{name}</Text>
            </View>
        </TouchableWithoutFeedback>
    );

    const box2 = (
        <TouchableWithoutFeedback onPress={removeInterest}>
            <View style={[styles.container, small && {width: '40%'}, styles.redBackground ]}>
                <Text style={[styles.text, styles.whiteText ]}>{name}</Text>
            </View>
        </TouchableWithoutFeedback>
    )

    return(
        <>
            {!selected ? box1 : box2 }
        </>
    )
};

const styles = StyleSheet.create({
    container: {
        height: 33,
        width: '55%',
        borderRadius: 17,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#808080',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    redBackground: {
        backgroundColor: red,
        borderWidth: 0
    },
    text: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
        opacity: 0.7
    },
    whiteText: {
        color: '#fff',
        opacity: 1
    }
})

export default InterestBox;