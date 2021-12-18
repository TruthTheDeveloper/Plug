import React, {FC} from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

const {width} = Dimensions.get('window');

interface ExtraButtonsProps {
    submit: () => void,
    cancle: () => void
}

const ExtraButtons:FC<ExtraButtonsProps> = ({submit, cancle}):JSX.Element => {
    return(
        <View></View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: 45,
        width: width
    }
})

export default ExtraButtons;