import React, {FC, useState} from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';

//Components
import { Header } from '../../../components';
import ProfilePic from './ProfilePic';

import LargeLabeledInput from './LargeLabeledInpu';

import Icons from 'react-native-vector-icons/Feather';

import {university, college} from '../constants';
import {Form1, Form2, Form3, Modal} from '../../../components';
import {
  CollegeList,
  PolyList,
} from '../../../components/InstitutionComponents/ListOfInstitutions';

import InstitutionChecker from '../../SignupScreens/components/InstitutionChecker';
import PersonalityBox from '../../SignupScreens/components/personalityBox';

const {height, width} = Dimensions.get('window');

interface EditScreenProps{
    image: string,
    // university: string,
    // depatrment: string,
    // level: any
}

const EditScreen:FC<EditScreenProps> = ({image}):JSX.Element => {
    const [Institution, setInstitution] = useState(university);

    const [universityName, setUniversity] = useState();
    const [department, setDepartment] = useState();
    const [level, setLevel] = useState();

    const [List, setList] = useState<any | null>(null);

    const [loading, setLoading] = useState(false);

    const [personality, setPersonality] = useState<any | null>([]);

    const addPersonality = (e: string) => {
        setPersonality((prev: any) => [...prev, e]);
    };

    const removePersonality = (e: string) => {
        const idx = personality.indexOf(e);
        let item = personality;
        item.splice(idx, 1);
        setPersonality(item);
    };

    //personality Containers
    const div1 = (
        <View style={styles.personalityFlex}>
        <PersonalityBox
            personality={personality}
            attribute="attributeOne"
            small={false}
            name="Passionate"
            postPersonality={addPersonality}
            deletePersonality={removePersonality}
        />
        <View style={styles.gap} />
        <PersonalityBox
            personality={personality}
            attribute="attributeTwo"
            small
            name="Smart"
            postPersonality={addPersonality}
            deletePersonality={removePersonality}
        />
        </View>
    );
    const div2 = (
        <View style={styles.personalityFlex}>
        <PersonalityBox
            personality={personality}
            attribute="attributeThree"
            small={true}
            name="Creative"
            postPersonality={addPersonality}
            deletePersonality={removePersonality}
        />
        <View style={styles.gap} />
        <PersonalityBox
            personality={personality}
            attribute="attributeFour"
            small={false}
            name="Ambitious"
            postPersonality={addPersonality}
            deletePersonality={removePersonality}
        />
        </View>
    );
    const div3 = (
        <View style={styles.personalityFlex}>
        <PersonalityBox
            personality={personality}
            attribute="attributeFive"
            small={false}
            name="Honest"
            postPersonality={addPersonality}
            deletePersonality={removePersonality}
        />
        <View style={styles.gap} />
        <PersonalityBox
            personality={personality}
            attribute="attributeSix"
            small
            name="Humble"
            postPersonality={addPersonality}
            deletePersonality={removePersonality}
        />
        </View>
    );
    const div4 = (
        <View style={styles.personalityFlex}>
        <PersonalityBox
            personality={personality}
            attribute="attributeSeven"
            small={true}
            name="Responsible"
            postPersonality={addPersonality}
            deletePersonality={removePersonality}
        />
        <View style={styles.gap} />
        <PersonalityBox
            personality={personality}
            attribute="attributeEight"
            small={false}
            name="Hardworking"
            postPersonality={addPersonality}
            deletePersonality={removePersonality}
        />
        </View>
    );

    let forms;
    if (Institution === university) {
        forms = (
        <Form1
            onSelect={() => setList(CollegeList)}
            name={universityName}
            department={department}
            level={level}
            onChangeDept={(e: any) => setDepartment(e)}
            onChangeLev={(e: any) => setLevel(e)}
        />
        );
    } else if (Institution === college) {
        forms = (
        <Form2
            onSelect={() => setList(CollegeList)}
            name={universityName}
            department={department}
            level={level}
            onChangeDept={(e: any) => setDepartment(e)}
            onChangeLev={(e: any) => setLevel(e)}
        />
        );
    } else {
        forms = (
        <Form3
            onSelect={() => setList(PolyList)}
            name={universityName}
            department={department}
            level={level}
            onChangeDept={(e: any) => setDepartment(e)}
            onChangeLev={(e: any) => setLevel(e)}
        />
        );
    };

    const onSelect = (e: any) => {
        setList(null);
        setTimeout(() => {
          setUniversity(e);
        }, 100);
      };

    return (
        
        <View style={styles.container}>
            <ScrollView>
            <Header label='Edit' home={false} />
            <View style={styles.ImageContainer}>
                <ProfilePic image={image} />
            </View>
            <View style={styles.FormContainer}>
                <LargeLabeledInput label='Description' />
            </View>
            <InstitutionChecker
                active={Institution}
                onChange={e => setInstitution(e)}
            />
            <View style={{width: width - 30, marginLeft: 15, marginBottom: 20}}>
                {forms}
            </View>
            <View style={styles.personalityContainer}>
                <Text style={styles.title}>What best describe you</Text>
                <View style={styles.personalitys}>
                    {div1}
                    {div2}
                    {div3}
                    {div4}
                </View>
            </View>
            </ScrollView>
            {List && <Modal packages={List} onSelect={onSelect} />}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        position: 'absolute',
        top: 0,
        backgroundColor: '#fff'
    },
    ImageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        paddingTop: 20,
        paddingBottom: 20
    },
    FormContainer: {
        width: width - 30,
        marginLeft: 15,
        paddingBottom: 20
    },
    personalityContainer: {
        width: width - 30,
        marginLeft: 15,
        marginTop: 5,
        paddingTop: 15,
    },
    title: {
        fontSize: 20,
        opacity: 0.6,
        color: '#000',
    },
    personalitys: {
        width: '100%',
        marginTop: 15,
        marginBottom: 100
    },
    personalityFlex: {
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 10,
    },
    gap: {
        width: '5%',
    },
});

export default EditScreen;