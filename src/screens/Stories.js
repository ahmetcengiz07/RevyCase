/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {
  Text,
  Modal,
  View,
  ImageBackground,
  SafeAreaView,
  Dimensions,
  TextInput,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icons from '../tabIcons/icons';
import FillLine from '../components/FillLine';
import {useDispatch, useSelector} from 'react-redux';
import {setWatched} from '../redux/action/';

const Stories = ({visible, setVisible}) => {
  const [currentStory, setCurrentStory] = useState(1);
  const width = Dimensions.get('window').width;
  const dispatch = useDispatch();
  const watched = useSelector(state => state.watched);
  console.log(watched);
  const [storiesData, setStoriesData] = useState([
    {id: 0, image: require('../assets/Story1.png')},
    {id: 1, image: require('../assets/Story2.png')},
    {id: 2, image: require('../assets/Story3.png')},
    {id: 3, image: require('../assets/Story4.png')},
  ]);

  const getStories = storiesData.map((item, index) => {
    return <FillLine index={index} currentStory={currentStory}></FillLine>;
  });

  return (
    <Modal visible={visible} animationType="fade" transparent={false}>
      <Pressable
        onPress={item =>
          item.nativeEvent.locationX < width / 2
            ? currentStory === 1
              ? setVisible(false)
              : (setCurrentStory(currentStory - 1),
                dispatch(setWatched(currentStory)))
            : currentStory === storiesData.length
            ? (setVisible(false), setCurrentStory(1))
            : (setCurrentStory(currentStory + 1),
              dispatch(setWatched(currentStory)))
        }
        style={{flex: 1, backgroundColor: 'black'}}>
        <ImageBackground
          resizeMethod="auto"
          resizeMode="cover"
          style={{flex: 1, borderRadius: 8}}
          source={storiesData[currentStory - 1].image}>
          <SafeAreaView>
            <View
              style={{
                width: width,
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              {getStories}
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 8,
                marginTop: 18,
                alignItems: 'center',
              }}>
              <Icons iconName={'Logo'} />
              <Text
                style={{
                  marginLeft: 12,
                  color: '#fff',
                  fontSize: 14,
                  fontWeight: '500',
                }}>
                Revy{' '}
              </Text>
              <Text style={{color: '#fff', fontSize: 14, fontWeight: '500'}}>
                3h
              </Text>
            </View>
          </SafeAreaView>
        </ImageBackground>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View
            style={{
              backgroundColor: 'black',
              marginBottom: 43,
              marginLeft: 2,
              borderWidth: 1,
              borderRadius: 50,
              flexDirection: 'row',
              borderColor: 'white',
              flex: 1,
              marginTop: 32,
            }}>
            <TextInput
              placeholder="Yorum yap"
              placeholderTextColor={'white'}
              style={{
                color: 'white',
                fontSize: 16,
                fontWeight: '400',
                lineHeight: 19,
                paddingVertical: 17,
                paddingLeft: 24,
              }}
            />
          </View>
          <TouchableOpacity>
            <Icons
              style={{marginHorizontal: 24, marginTop: 44}}
              iconName={'StoriesHeart'}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icons
              style={{marginRight: 24, marginTop: 44}}
              iconName={'StoriesSend'}
            />
          </TouchableOpacity>
        </View>
      </Pressable>
    </Modal>
  );
};

export default Stories;
