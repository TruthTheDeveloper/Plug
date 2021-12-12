/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import Icons from 'react-native-vector-icons/Feather';
import * as actionTypes from '../../../redux/actions/actionTypes';
import {useDispatch} from 'react-redux';

import {university, college} from '../constants';
import {Form1, Form2, Form3, Modal} from '../../../components';
import {
  CollegeList,
  PolyList,
} from '../../../components/InstitutionComponents/ListOfInstitutions';

import EmojiHeader from './EmojiHeader';
import StatusBar from './StatusBar';
import InstitutionChecker from './InstitutionChecker';
import ContinueButton from './ContinueButton';

const {height, width} = Dimensions.get('window');

const SignupScreen2 = () => {
  const [Institution, setInstitution] = useState(university);

  const [universityName, setUniversity] = useState();
  const [department, setDepartment] = useState();
  const [level, setLevel] = useState();

  const [List, setList] = useState<any | null>(null);

  const [loading, setLoading] = useState(false);

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
  }

  const onSelect = (e: any) => {
    setList(null);
    setTimeout(() => {
      setUniversity(e);
    }, 100);
  };

  const dispatch = useDispatch();

  const next = () => {
    setLoading(true);
    dispatch({type: actionTypes.SCREEN3});
  };

  const back = () => {
    dispatch({type: actionTypes.SCREEN1});
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerFlexer}>
        <TouchableWithoutFeedback onPress={back}>
          <View style={{paddingRight: 20}}>
            <Icons name="chevron-left" color="#000" size={25} />
          </View>
        </TouchableWithoutFeedback>
        <EmojiHeader page={2} />
      </View>
      <StatusBar page={2} />
      <Text style={styles.header}>Institution</Text>
      <InstitutionChecker
        active={Institution}
        onChange={e => setInstitution(e)}
      />
      <View style={styles.formContainer}>
        {forms}
        <ContinueButton label="Continue" continue={next} loading={loading} />
      </View>
      {List && <Modal packages={List} onSelect={onSelect} />}
    </View>
  );
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
    marginLeft: 15,
  },
  header: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 22,
    paddingTop: 15,
    paddingLeft: 15,
  },
  formContainer: {
    width: width - 30,
    marginLeft: 15,
    paddingTop: 15,
  },
});
