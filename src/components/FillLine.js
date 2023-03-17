import {View, Text, Animated, Dimensions} from 'react-native';
import React, {useEffect, useRef} from 'react';

const FillLine = ({index, currentStory}) => {
  const width = Dimensions.get('window').width;

  let line = (width - 17) / 4;
  const storyAnimWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(storyAnimWidth, {
      toValue: currentStory,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, [currentStory, storyAnimWidth]);

  const AnimWidth = storyAnimWidth.interpolate({
    inputRange: [currentStory - 1, currentStory],
    outputRange: [0, line],
    extrapolate: 'clamp',
  });
  const currentType =
    index + 1 > currentStory
      ? 'deactive'
      : index + 1 === currentStory
      ? 'active'
      : 'finished';
  if (currentType === 'deactive') {
    return (
      <View
        style={{
          width: line,
          height: 2,
          backgroundColor: 'grey',
          alignItems: 'center',
        }}></View>
    );
  } else if (currentType === 'finished') {
    return (
      <View
        style={{
          width: line,
          height: 2,
          backgroundColor: '#FFCC00',
          alignItems: 'center',
        }}></View>
    );
  } else {
    return (
      <>
        <Animated.View
          key={index}
          style={{
            width: AnimWidth,
            marginHorizontal: 6 * index,
            height: 2,
            backgroundColor: '#FFCC00',
            position: 'absolute',
            left: line * index,
            zIndex: 999,
          }}></Animated.View>
        <View
          style={{
            width: line,
            height: 2,
            backgroundColor: 'grey',
            alignItems: 'center',
          }}></View>
      </>
    );
  }
};

export default FillLine;
