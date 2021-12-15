import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const {height, width} = Dimensions.get('window');

const Item = () => {
    return (
        <View style={styles.box} />
    )
}

const MyCaoursel = () => {
    const [data, setData] = useState([
        0, 1, 2, 3, 4, 5
    ])

    // const Item = <View style={styles.box} />

    return(
        <View style={styles.container}>
            <Carousel
              data={data}
              renderItem={Item}
              sliderWidth={width}
              itemWidth={width/1.5}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        backgroundColor: 'pink'
    },
    box: {
        height: height/2,
        width: width/2,
        backgroundColor: 'red',
        borderRadius: 10
    }
})

export default MyCaoursel;