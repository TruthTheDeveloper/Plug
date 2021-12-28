import React from 'react';
import { View, Text, Dimensions, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import Profile from '../HomeScreen/components/Profile';
import DetailsDiv from '../HomeScreen/components/DetailsDiv';

import { Header } from '../../components';

const {width, height} = Dimensions.get('window');

const SecondScreenView = () => {
    const showDetails = useSelector((state: any) => state.chatReducer.details);
    const profileData = useSelector((state:any) => state.profileReducer.profileData);
    const indx = useSelector((state: any) => state.generalReducer.index);

    const scrollData = () => {
        
    }

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
                data={profileData}
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