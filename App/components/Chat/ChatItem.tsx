import React, {FC} from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

const {width} = Dimensions.get('window');

interface ChatProps {
    id: number,
    message: string
}

const ChatItem:FC<ChatProps> = ({id, message}):JSX.Element => {
    const user = 1;
    return(
        <View style={styles.container}>
            {id === user ? 
                <View style={styles.box2}>
                    <Text style={styles.text}>{message}</Text>
                </View>
                :
                <View style={styles.box}>
                    <Text style={styles.text}>{message}</Text>
                </View>
            }
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: 20
    },
    box: {
        minHeight: 20,
        maxWidth: '70%',
        borderRadius: 15,
        marginLeft: 15,
        padding: 10,
        paddingLeft: 15,
        borderColor: '#ccc',
        borderWidth: 1
    },
    box2: {
        minHeight: 20,
        maxWidth: '70%',
        borderRadius: 15,
        padding: 10,
        paddingLeft: 15,
        alignSelf: 'flex-end',
        marginRight: 15,
        backgroundColor: '#f0f0f0'
    },
    text: {
        fontSize: 16,
        color: '#000'
    }
});

export default ChatItem;