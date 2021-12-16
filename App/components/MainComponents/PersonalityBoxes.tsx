import React, {FC} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { red } from '../../config/colors';

interface PersonalityProps {
    value: any
}

const PersonalityBoxes:FC<PersonalityProps> = ({value}):JSX.Element => {
    return(
        <View style={{ alignItems: 'baseline', paddingRight: 7 }}>
            <View style={styles.container}>
                <Text style={styles.text}>{value}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: 28,
        width: 'auto',
        backgroundColor: red,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 20,
        paddingLeft: 20,
        borderRadius: 15,
        marginBottom: 7
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default PersonalityBoxes