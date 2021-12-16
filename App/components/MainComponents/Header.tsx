import React, { FC } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

//Icon
import Icons from 'react-native-vector-icons/Feather';

const {width} = Dimensions.get('window');

interface headerProps {
    label: string
}

const Header:FC<headerProps>  = ({label}):JSX.Element => {
    return(
        <View style={styles.container}>
            <View style={styles.flex1}>
                {/* <Icons name="chevron-left" color="#000" size={27} style={styles.arrow} /> */}
            </View>
            <View style={styles.flex2}>
                <Text style={styles.title}>{label}</Text>
            </View>
            <View style={styles.flex3}>
                <Icons name="search" color="#000" size={22} />
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
        alignItems: 'center',
        justifyContent: 'center'
    },
    flex3: {
        height: 30,
        width: 66,
        backgroundColor: '',
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'center'
    },
    arrow: {
        marginLeft: 15
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        color: '#000'
    }
})

export default Header