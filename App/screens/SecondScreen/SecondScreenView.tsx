import React, { FC, useEffect } from 'react';
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
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('ahhhhh')
    }, [])
    
    const showDetails = useSelector((state: any) => state.chatReducer.details);
    const profileData = useSelector((state:any) => state.profileReducer.profileData);
    const newData = useSelector((state: any) => state.generalReducer.largeCardData);

    const indx = useSelector((state: any) => state.generalReducer.index);

    const goBack = () => {
        dispatch({type: actionTypes.LARGE_CARD_DATA, value: null});
        navigate();
        return true
    }

    BackHandler.addEventListener('hardwareBackPress', goBack );

    return(
        <View style={styles.container}>
            <Header label="All Student" />
            <FlatList
                key={'#'}
                horizontal
                decelerationRate={'fast'}
                snapToAlignment="center"
                disableIntervalMomentum={true}
                snapToInterval={width}
                showsHorizontalScrollIndicator={false}
                initialScrollIndex={indx}
                data={newData}
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