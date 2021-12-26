import React, {FC} from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableWithoutFeedback } from 'react-native';

import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Ionicons';

const {width} = Dimensions.get('window');

interface ChatBarProps {
    text: string,
    setText:(e: string) => void,
    openGallery: () => void
}

const ChatInputBar:FC<ChatBarProps> = ({text, setText, openGallery}):JSX.Element => {
    return(
        <View style={styles.container}>
            <View style={styles.main}>
                <TextInput placeholder='Type message...' style={styles.input} onChangeText={(e) => setText(e)} />
                <View style={styles.IconContainer}>
                    {!text ? 
                        <TouchableWithoutFeedback onPress={openGallery}>
                            <Icon1 name='picture' color='#000' size={30} />
                        </TouchableWithoutFeedback>
                        :
                        <Icon2 name='ios-send' color='#3345EB' size={30} style={styles.sendButton} />
                    }
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: 70,
        width: width,
        backgroundColor: '#FFF',
        paddingTop: 10
    },
    main: {
        height: 50,
        width: width - 30,
        marginLeft: 15,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#aaaaaa',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        height: 40,
        width: width - 100,
        paddingLeft: 15,
        fontSize: 16,
        color: '#000',
        opacity: 0.9
    },
    IconContainer: {
        height: 50,
        width: 67,
        // backgroundColor: 'red',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    sendButton: {
        alignSelf: 'flex-end',
        paddingRight: 10
    }
});

export default ChatInputBar;