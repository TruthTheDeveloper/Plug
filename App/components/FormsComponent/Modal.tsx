import React, { FC, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';

import {ModalItem} from '../index'

const {height, width} = Dimensions.get('window');

interface PackageData {
    packages: {[index: string]:any}
 }

const Modal: FC<PackageData> = ({packages}): JSX.Element => {

    useEffect(() => {
        mapPackages();
    }, []);

    const mapPackages = (pkg = packages) => {
        for(const i in pkg){
            const obj = pkg[i]
            const name = obj[Object.keys(obj)[0]];
            return(
                <ModalItem />
            )
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.mainModal}>
                <ScrollView>
                    {mapPackages}
                </ScrollView>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        top: 0,
        left: 0
    },
    mainModal: {
        height: height - 50,
        marginTop: 10,
        width: width - 40,
        marginLeft: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingTop: 10,
        paddingBottom: 10
    }
})

export default Modal;