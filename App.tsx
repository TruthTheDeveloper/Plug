/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Dimensions, Text, StyleSheet, ImageBackground } from 'react-native';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';

import Navigator from './App/navigation/navigation/Navigators';

import { HomeScreenContainer } from './App/index';

const App = () => {
  const translateX = useSharedValue(0)

  const panGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onStart: (event) => {},
    onActive: (event) => {
        translateX.value = event.translationX
    },
      onEnd: (event) => {}
  });

  const rStyle = useAnimatedStyle(() => {
      return{
          transform: [
              {
                  translateX: translateX.value
              }
          ]
      }
  })

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Animated.View style={[styles.box, rStyle]}>

        </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: 100,
    borderRadius: 7,
    backgroundColor: 'blue'
  }
})

export default App;
