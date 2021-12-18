import React, {FC} from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { red } from '../../../config/colors';

const {width} = Dimensions.get('window');

interface ExtraButtonsProps {
    submit: () => void,
    cancle: () => void
}

const buttonDiv = (width-30)/2

const ExtraButtons:FC<ExtraButtonsProps> = ({submit, cancle}):JSX.Element => {
    return(
        <View style={styles.container}>
            <View style={styles.div}>
                <View style={styles.button}>
                    <Text style={styles.text}>Cancle</Text>
                </View>
            </View>
            <View style={styles.div2}>
                <View style={[styles.button2, {backgroundColor: '#000'}]}>
                    <Text style={[styles.text, {color: '#fff'}]}>Update</Text>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: 45,
        width: width - 30,
        marginBottom: 200,
        marginTop: 40,
        marginLeft: 15,
        display: 'flex',
        flexDirection: 'row'
    },
    div: {
        height: 45,
        width: buttonDiv,
    },
    div2: {
        height: 45,
        width: buttonDiv,
        flexDirection: 'row-reverse'
    },
    button: {
        height: 45,
        width: buttonDiv - 30,
        backgroundColor: '#E4E4E4',
        marginLeft: 10,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button2: {
        height: 45,
        width: buttonDiv - 30,
        backgroundColor: '#E4E4E4',
        marginRight: 10,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#000',
        fontSize: 20,
    }
})

export default ExtraButtons;