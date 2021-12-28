/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import * as actionTypes from '../../redux/actions/actionTypes';

import Icons from 'react-native-vector-icons/Feather';
import Item from './components/Items';
import { useDispatch } from 'react-redux';
import * as actions from '../../redux/actions/index';

import {Loader} from '../../components';

const {height, width} = Dimensions.get('window');

const SearchScreenView = () => {
  const [searchData, setSearchData]  = useState<string>();
  const [sumbitSearch, setSumbitSearch] = useState<boolean>(false);

  const dispatch = useDispatch();
  const [loading] = useState<boolean>(false);
  const [pageNum, setPageNum] = useState(1);

  const searchSubmit = () => {
    setSumbitSearch(true);


    dispatch(actions.searchAllProfile(searchData, pageNum));
    setPageNum(prev => prev + 1);
  };

  const incrementPageNumber = () => {
    setPageNum(prev => prev + 1);
  };

  useEffect(() => {
    dispatch({searchedData:[], type:actionTypes.RESET_SEARCH_DATA});
      setPageNum(1);
      const timer = setTimeout(() => {
        if (searchData !== ''){
          dispatch(actions.searchAllProfile(searchData, pageNum));
          setSumbitSearch(true);
          setPageNum(prev => prev + 1);
        }
      },500);

      return () => {
        clearTimeout(timer);
      };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[searchData]);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <View style={styles.grid1}>
            <TextInput
              placeholder="Search department or level"
              style={styles.searchBox}
              returnKeyType="search"
              autoFocus={true}
              onSubmitEditing={searchSubmit}
              onChangeText={(e:string) => setSearchData(e)}
            />
          </View>
          <View style={styles.grid2}>
            <Icons name="search" size={25} color="#000" />
          </View>
        </View>
      </View>
      {sumbitSearch && <Item pageNumber={pageNum} changePageNumber={incrementPageNumber} queryData={searchData}/>}
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
