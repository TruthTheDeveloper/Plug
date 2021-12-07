import React, { FC } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Button } from 'react-native';


interface ButtonProps {
    toggle: () => void,
    label: string,
    label2: string
}

const Link: FC<ButtonProps> = (props): JSX.Element => {
    return(
        <TouchableWithoutFeedback onPress={props.toggle}>
            <View style={styles.container}>
                <Text style={styles.text1}>{props.label}</Text>
                <Text style={styles.text2}>{props.label2}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingTop: 20
    },
    text1: {
        color: '#000',
        fontWeight: '100',
        fontSize: 16
    },
    text2: {
        color: '#9595FF',
        fontWeight: '100',
        fontSize: 16,
        paddingLeft: 10
    }
})

export default Link