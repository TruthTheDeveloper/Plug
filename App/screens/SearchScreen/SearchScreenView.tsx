import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import Icons from 'react-native-vector-icons/Feather';

const {height, width} = Dimensions.get('window')

const SearchScreenView = () => {
    return(
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <View style={styles.searchBar}>
                    <View style={styles.grid1}>
                        <TextInput placeholder='Search department and level' style={styles.searchBox} />
                    </View>
                    <View style={styles.grid2}>
                        <Icons name="home" size={25} color='#000' />
                    </View>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        backgroundColor: '#fff'
    },
    searchContainer: {
        paddingTop: 10,
        paddingBottom: 10,
        width: width,
        backgroundColor: '#fff'
    },
    searchBar: {
        height: 40,
        width: width - 40,
        marginLeft: 20,
        backgroundColor: '#e0e0e0',
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'row'
    },
    grid1: {
        width: width - 100,
        backgroundColor: 'blue'
    },
    grid2: {
        height: 40,
        width: 60,
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchBox: {
        height: 40,
        width: '90%',
        backgroundColor: 'red'
    }
})

export default SearchScreenView;