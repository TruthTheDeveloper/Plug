import React, {FC} from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { red } from '../../../config/colors';

const {width} = Dimensions.get('window');

interface ExtraButtonsProps {
    submit: () => void,
    cancle: () => void
}

const ExtraButtons:FC<ExtraButtonsProps> = ({submit, cancle}):JSX.Element => {
    return(
        <View style={styles.container}>
            <View style={styles.div}></View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: 45,
        width: width - 30,
        backgroundColor: red,
        marginBottom: 200,
        marginTop: 40
    },
    div: {
        height: 45,
        width: (width-30)/2,
        backgroundColor: 'blue'
    }
})

export default ExtraButtons;