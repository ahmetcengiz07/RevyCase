/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icons from '../tabIcons/icons';
import LinearGradient from 'react-native-linear-gradient';

import Stories from './Stories';

const mockData = [
  {
    followerTitle: 'Takipçi',
    NumberOfFollower: 6956,
    following: 'Takip Ediyor',
    NumberOfFollowing: 27.7,
  },
];

const ProfileScreen = ({route, navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const watched = false;
  const [gradientColors, setGradientColors] = useState(['#D9D9D9', '#A6A6A6']);

  useEffect(() => {
    if (watched) {
      setGradientColors(['#D9D9D9', '#A6A6A6']);
    } else setGradientColors(['#8A3BEE', '#F200B7', '#FE9402']);
  }, [watched]);
  return (
    <SafeAreaView style={{backgroundColor: '#FFF', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 27,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Icons style={{marginLeft: 15}} iconName={'Back'} color={'black'} />
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontWeight: '600', fontSize: 16}}>Revy</Text>
          <Icons iconName={'VerifiedBadge'} />
        </View>
        <View style={{width: 31}} />
      </View>
      <View style={{flexDirection: 'row', marginTop: 11, alignItems: 'center'}}>
        <LinearGradient
          colors={gradientColors}
          style={styles.linearGradient}></LinearGradient>
        <Pressable onPress={() => setModalVisible(true)}>
          <Image
            style={{marginLeft: 22}}
            source={require('../assets/image3.png')}
          />
        </Pressable>
        <View
          style={{
            width: 78,
            height: 100,
            marginLeft: 42,
            justifyContent: 'center',
          }}>
          <Text style={styles.following}>{mockData[0].NumberOfFollower}</Text>
          <Text style={styles.followingTitle}>
            {mockData[0].followerTitle}{' '}
          </Text>
        </View>
        <View
          style={{
            width: 78,
            height: 100,
            marginLeft: 21,
            justifyContent: 'center',
          }}>
          <Text style={styles.following}>{mockData[0].NumberOfFollowing}m</Text>
          <Text style={styles.followingTitle}>{mockData[0].following}</Text>
        </View>
      </View>
      <Stories setVisible={setModalVisible} visible={modalVisible} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  following: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 19,
    textAlign: 'center',
  },
  followingTitle: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 15,
    marginTop: 8,
    textAlign: 'center',
  },
  linearGradient: {
    width: 98,
    height: 98,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    marginLeft: 19,
  },
});

export default ProfileScreen;
