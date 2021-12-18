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
            <View></View>
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
    }
})

export default ExtraButtons;