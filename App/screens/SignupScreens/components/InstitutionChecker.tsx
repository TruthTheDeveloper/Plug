import React, { FC } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableWithoutFeedback } from 'react-native';
import {university, college, polythecnic} from '../constants';
const {width} = Dimensions.get('window');

interface institutionPorps {
    active: string,
    onChange: (e: string) => void
}

const InstitutionChecker: FC<institutionPorps> = (props): JSX.Element => {
    const University = (
        <TouchableWithoutFeedback onPress={() => props.onChange(university)}>
            <View style={styles.active}>
                <Text style={styles.activeText}>University</Text>
            </View>
        </TouchableWithoutFeedback>
    );

    const College = (
        <TouchableWithoutFeedback onPress={() => props.onChange(college)}>
            <View style={styles.item}>
                <Text style={styles.text}>College</Text>
            </View>
        </TouchableWithoutFeedback>
    );

    const Polythecnic = (
        <TouchableWithoutFeedback onPress={() => props.onChange(university)}>
            <View style={styles.item}>
                <Text style={styles.text}>Polythecnic</Text>
            </View>
        </TouchableWithoutFeedback>
    )
    return (
        <View style={styles.container}>
            {University}
            {College}
            {Polythecnic}
        </View>
    )
}

export default InstitutionChecker;

const styles = StyleSheet.create({
    container: {
        height: 45,
        width: width - 30,
        marginLeft: 15,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 7,
        marginTop: 20,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'row'
    },
    item: {
        height: '100%',
        width: '33%',
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    active: {
        height: '100%',
        width: '33%',
        backgroundColor: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#000',
        fontWeight: '600',
        fontSize: 16
    },
    activeText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16
    }
})