import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';

const {width} = Dimensions.get('window');

const InstitutionChecker = () => {
    return (
        <View style={styles.container}>
            <View style={styles.active}>
                <Text style={styles.activeText}>University</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.text}>College</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.text}>Polythecnic</Text>
            </View>
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