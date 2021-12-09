import React, {FC, useState} from 'react';
import { View, Text, StyleSheet, Dimensions, Switch } from 'react-native';
import Icons from 'react-native-vector-icons/Feather';
import {university, college, polythecnic} from '../constants';

import {SubmitButton, Form1, Form2, Form3} from '../../../components';

import EmojiHeader from './EmojiHeader';
import StatusBar from './StatusBar';
import InstitutionChecker from './InstitutionChecker';

const {height, width} = Dimensions.get('window');

const SignupScreen2 = () => {
    const [Institution, setInstitution] = useState(university);

    const [details, setDetails] = useState();

    let forms;
    if(Institution === university){
        forms = <Form1 />
    }else if(Institution === college){
        forms = <Form2 />
    }else{
        forms = <Form3 />
    }

    return(
        <View style={styles.container}>
            <View style={styles.headerFlexer}>
                <Icons name='chevron-left' color='#000' size={25} />
                <EmojiHeader />
            </View>
            <StatusBar />
            <Text style={styles.header}>Institution</Text>
            <InstitutionChecker active={Institution} onChange={(e) => setInstitution(e) } />
            <View style={styles.formContainer}>
                {forms}
                <SubmitButton label='Continue' />
            </View>
        </View>
    )
};

export default SignupScreen2;

const styles = StyleSheet.create({
    container: {
        height: height,
        width: '100%',
    },
    headerFlexer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15
    },
    header: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 22,
        paddingTop: 15,
        paddingLeft: 15
    },
    formContainer: {
        width: width - 30,
        marginLeft: 15,
        paddingTop: 15
    }
})