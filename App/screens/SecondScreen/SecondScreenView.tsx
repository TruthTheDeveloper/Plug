import React, { FC, useEffect, useRef, useState } from 'react';
import { View, Text, Dimensions, StyleSheet, FlatList, BackHandler } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import * as actionTypes from '../../redux/actions/actionTypes';

import Profile from '../HomeScreen/components/Profile';
import DetailsDiv from '../HomeScreen/components/DetailsDiv';

import { Header } from '../../components';

const {width, height} = Dimensions.get('window');

interface secondscreenProps {
    navigate: () => void
}

const SecondScreenView:FC<secondscreenProps> = ({navigate}):JSX.Element => {
    // const FlatListRef = useRef<FlatList<any>>();
    const dispatch = useDispatch();
    const indx = useSelector((state: any) => state.generalReducer.index);

    const [flatListRef, setFlatListRef] = useState<any|null>()

    useEffect(() => {
        setTimeout(() => onBeginScroll(), 500);
    }, [indx])
    
    const showDetails = useSelector((state: any) => state.chatReducer.details);
    const profileData = useSelector((state:any) => state.profileReducer.profileData);
    const newData = useSelector((state: any) => state.generalReducer.largeCardData);

    

    const goBack = () => {
        dispatch({type: actionTypes.LARGE_CARD_DATA, value: null});
        navigate();
        return true
    }

    BackHandler.addEventListener('hardwareBackPress', goBack );

    // let FlatListRef = null;

    // const onBeginScroll = () => {
    //     // FlatListRef._listRef._scrollRef.scrollToIndex({ animating: true, index: indx });
    //     FlatListRef.current?.scrollToIndex({animated: true, index: 9 });
    //     console.log('went')
    // }

    const onBeginScroll = () => {
        flatListRef?.scrollToIndex({animated: true, index: indx })
    }

    return(
        <View style={styles.container}>
            <Header label="All Student" />
            <FlatList
                key={'#'}
                horizontal
                ref={ref => setFlatListRef(ref) }
                decelerationRate={'fast'}
                snapToAlignment="center"
                disableIntervalMomentum={true}
                snapToInterval={width}
                showsHorizontalScrollIndicator={false}
                // initialScrollIndex={indx}
                data={profileData}
                // onScrollBeginDrag={onBeginScroll}
                renderItem={({item}) =>
                    <Profile
                        receiverId={item.socketId}
                        username={item.username}
                        availability={item.availability}
                        level={item.level}
                        department={item.department}
                        image={item.profilePic}
                        details={item.description}
                        attributeOne={item.attributeOne}
                        attributeTwo={item.attributeTwo}
                        attributeThree={item.attributeThree}
                        attributeFour={item.attributeFour}
                        attributeFive={item.attributeFive}
                        attributeSix={item.attributeSix}
                        attributeSeven={item.attributeSeven}
                        attributeEight={item.attributeEight}
                    />
                }
            />
            {showDetails && <DetailsDiv details={showDetails} /> }
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        backgroundColor: '#fff'
    }
})

export default SecondScreenView;