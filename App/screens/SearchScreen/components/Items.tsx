/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useCallback, FC} from 'react';
import {
  View,
  Dimensions,
  FlatList,
  BackHandler,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import * as actions from '../../../redux/actions/index';
import * as actionTypes from '../../../redux/actions/actionTypes';

import SearchProfileItem from './SearchProfileItem';
import Profile from '../../HomeScreen/components/Profile';
import DetailsDiv from '../../HomeScreen/components/DetailsDiv';
import { Loader } from '../../../components';


const {width} = Dimensions.get('window');


interface ItemProps {
  pageNumber:Number
  changePageNumber:() => void
  queryData:any
}


const Item: FC<ItemProps> = React.memo(({pageNumber, changePageNumber, queryData}): JSX.Element => {

  const dispatch = useDispatch();
  const searchedData = useSelector((state:any) => state.profileReducer.searchedData);
  const indx = useSelector((state: any) => state.generalReducer.searchIndex);
  const showCard = useSelector((state: any) => state.generalReducer.searchShowCard);
  const isLoading = useSelector((state:any) => state.profileReducer.searchLoading);

  // console.log(profileData, 'from home')
  // console.log(searchedData)


  const goBack = () => {
    dispatch({type: actionTypes.SHOW_SEARCHCARDS, value: false});
    return true;
  };

  const openGrid = (e: number) => {
    dispatch({type: actionTypes.SHOW_SEARCHCARDS, value: true});
    dispatch({type: actionTypes.SEARCH_INDEX, value: e});
  };

  const getNewList = useCallback(() => {
    dispatch(actions.searchAllProfile(queryData, pageNumber));
    changePageNumber();
  },[changePageNumber, dispatch, pageNumber, queryData]);

  BackHandler.addEventListener('hardwareBackPress', goBack);

  const showDetails = useSelector((state: any) => state.chatReducer.details);
  return (
    <>
      {isLoading ? <Loader/> : <View style={{backgroundColor: '#fff'}}>
        {!showCard ? (
          <FlatList
            key={'()'}
            numColumns={2}
            data={searchedData}
            renderItem={({item, index}) => (
              <SearchProfileItem
                username={item.username}
                verified={item.availability}
                level={item.level}
                department={item.department}
                image={item.profilePic}
                index={index}
                setIndex={openGrid}
              />
            )}
            extraData={showCard}
            style={{marginBottom: 127}}
            onEndReached={getNewList}

          />
        ) : (
          <FlatList
            key={'*'}
            horizontal
            decelerationRate={'fast'}
            snapToAlignment="center"
            disableIntervalMomentum={true}
            snapToInterval={width}
            showsHorizontalScrollIndicator={false}
            initialScrollIndex={indx}
            data={searchedData}
            renderItem={({item}) => (
              <Profile
                username={item.username}
                availability={item.availability}
                level={item.level}
                department={item.department}
                image={item.profilePic}
                details={item.details}
                receiverId={undefined}
                attributeOne={item.attributeOne}
                attributeTwo={item.attributeTwo}
                attributeThree={item.attibuteThree}
                attributeFour={item.attributeFour}
                attributeFive={item.attributeFive}
                attributeSix={item.attributeSix}
                attributeSeven={item.attributeSeven}
                attributeEight={item.attributeEight}
              />
            )}
          />
        )}
      </View>}
      {showDetails && <DetailsDiv details={showDetails} />}
    </>
  );
});


export default Item;
