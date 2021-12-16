import React, {FC} from 'react';
import { View, Text, Dimensions, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';

//Icon
import Icons from 'react-native-vector-icons/Feather';
const icon = require('../../assets/images/verified.png');

const {width} = Dimensions.get('window');

interface ChatHeaderProps {
    username: string,
    active: any,
    back: () => void
}

const ChatHeader:FC<ChatHeaderProps> = ({username, active, back}) => {
    return(
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={back}>
                <View style={styles.flex1}>
                    <Icons name="chevron-left" color="#000" size={27} style={styles.arrow} />
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.flex2}>
                <Text style={styles.title}>{username}</Text>
                {active && <Image source={icon} />}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: 30,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingBottom: 40
    },
    flex1: {
        height: 30,
        width: 66,
        backgroundColor: '',
        display: 'flex',
        justifyContent: 'center'
    },
    flex2: {
        height: 30,
        width: width - 130,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        color: '#000',
        paddingRight: 5
    },
    arrow: {
        marginLeft: 15
    },
});

export default ChatHeader;