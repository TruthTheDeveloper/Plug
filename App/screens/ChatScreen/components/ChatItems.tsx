import React, {FC} from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground, TouchableHighlight } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Username } from '../../../components';

const {width} = Dimensions.get('window');

interface ChatProps {
    username: string,
    active: boolean,
    lastText: string,
    image: any
}

const ChatItem:FC<ChatProps> = ({username, active, lastText, image}):JSX.Element => {
    let newText = lastText;
    if(lastText.length > 20){
        newText = lastText.substring(0, 20) + '...';
    }
    return(
        <TouchableHighlight underlayColor={'#e4e4e4'} onPress={() => console.log(username)}>
            <View style={styles.container}>
                <View style={styles.UserImage}>
                    <ImageBackground source={image} style={styles.image} />
                </View>
                <View style={styles.container2}>
                    <Username username={username} active={active} />
                    <Text style={styles.text}>{newText}</Text>
                </View>
                <View style={styles.dateContainer}>
                    <Text style={styles.date}>10:55 pm</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
};

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: width - 30,
        marginLeft: 15,
        paddingTop: 10,
        paddingBottom: 10,
        borderColor: '#d4d4d4',
        borderBottomWidth: 1,
        display:'flex',
        flexDirection: 'row',
    },
    UserImage: {
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: '#f0f0f0',
        overflow: 'hidden'
    },
    container2: {
        height: 60,
        width: width - 150,
        paddingLeft: 10,
        justifyContent: 'center'
    },
    text: {
        color: '#4d4d4d',
        fontSize: 17,
    },
    image: {
        height: '100%',
        width: '100%'
    },
    dateContainer: {
        height: '100%',
        width: 50,
        justifyContent: 'flex-end'
    },
    date: {
        fontSize: 14,
        paddingBottom: 8,
        color: '#000',
        opacity: 0.5
    }
})

export default ChatItem