import React, { FC } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface LabelProps {
    label: string,
}

const LabeledInput: FC<LabelProps> = (props): JSX.Element => {
    return(
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput style={styles.input} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: 10,
    },
    label: {
        fontWeight: '600',
        fontSize: 18,
        color: '#000',
        opacity: 0.7,
        paddingBottom: 5
    },
    input: {
        height: 37,
        width: '100%',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        paddingLeft: 10,
        opacity: 0.8,
        color: '#000',
        fontWeight: 'bold',
        fontSize: 17
    }
})

export default LabeledInput;