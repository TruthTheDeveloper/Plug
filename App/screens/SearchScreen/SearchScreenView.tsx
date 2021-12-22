/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

import Icons from 'react-native-vector-icons/Feather';
import Item from './components/Items';

import {Loader} from '../../components';
import { tapGestureHandlerProps } from 'react-native-gesture-handler/lib/typescript/handlers/TapGestureHandler';

const {height, width} = Dimensions.get('window');

const SearchScreenView = () => {
  const [, setSearchData] = useState<number | string>();
  const [sumbitSearch, setSumbitSearch] = useState<boolean>(false);

  const [loading] = useState<boolean>(tapGestureHandlerProps);

  const searchSubmit = () => {
    setSumbitSearch(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <View style={styles.grid1}>
            <TextInput
              placeholder="Search department and level"
              style={styles.searchBox}
              returnKeyType="search"
              autoFocus={true}
              onSubmitEditing={searchSubmit}
              onChangeText={(e: any) => setSearchData(e)}
            />
          </View>
          <View style={styles.grid2}>
            <Icons name="search" size={25} color="#000" />
          </View>
        </View>
      </View>
      {/* {sumbitSearch && <Item />} */}
      {loading && <Loader />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: '#fff',
  },
  searchContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    width: width,
    backgroundColor: '#fff',
  },
  searchBar: {
    height: 40,
    width: width - 40,
    marginLeft: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  grid1: {
    width: width - 100,
    backgroundColor: 'transparent',
  },
  grid2: {
    height: 40,
    width: 60,
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBox: {
    height: 40,
    width: '100%',
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 18,
    paddingLeft: '10%',
  },
});

export default SearchScreenView;
