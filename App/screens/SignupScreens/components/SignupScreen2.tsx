import React, {FC, useState} from 'react';
import { View, Text, StyleSheet, Dimensions, Switch } from 'react-native';
import Icons from 'react-native-vector-icons/Feather';

import {university, college, polythecnic} from '../constants';
import {SubmitButton, Form1, Form2, Form3, Modal} from '../../../components';
import {CollegeList, uniList, PolyList} from '../../../components/InstitutionComponents/ListOfInstitutions';

import EmojiHeader from './EmojiHeader';
import StatusBar from './StatusBar';
import InstitutionChecker from './InstitutionChecker';
import ContinueButton from './ContinueButton';

const {height, width} = Dimensions.get('window');

const SignupScreen2 = () => {
    const [Institution, setInstitution] = useState(university);

    const [universityName, setUniversity] = useState();
    const [collegeName, setCollege] = useState();
    const [polythecnicName, setPolythecnic] = useState();

    const [List, setList] = useState <any | null> (null);

    let forms;
    if(Institution === university){
        forms = <Form1 onSelect={() => setList(CollegeList)} />
    }else if(Institution === college){
        forms = <Form2 onSelect={() => setList(CollegeList)} name={collegeName} />
    }else{
        forms = <Form3 onSelect={() => setList(PolyList)} />
    };

    const onSelect = (e: any) => {
        setList(null);
        console.log(e)
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
                <ContinueButton label='Continue' />
            </View>
            {List && <Modal packages={List} onSelect={onSelect} /> }
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