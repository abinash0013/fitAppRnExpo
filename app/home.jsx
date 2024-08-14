import React from 'react';
import ImageSlider from '../components/ImageSlider';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { FadeIn, FadeInDown, FadeOut, FadeInRight, withSequence, withTiming, StretchInX, StretchOutY, ZoomIn  } from 'react-native-reanimated';

import BodyParts from '../components/BodyParts';

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-white flex space-y-4 mt-4" edges={['top']}>
      <StatusBar style="dark" />
      <View className="mx-2"> 
        <View className="flex-row justify-between items-center">  
          <Image
            source={require('./../assets/images/avatar.png')}
            style={{height: hp(5.5), width: hp(5.5)}}
            className="rounded-full ml-2"
          />
          <View 
            className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300"
            style={{height: hp(5.5), width: hp(5.5)}}
          >
            <Ionicons name="notifications" size={hp(3)} color="gray" />
          </View> 
        </View>        
        <View className="mt-2 mx-2">
          <Text className="font-bold tracking-wider text-neutral-500" style={{fontSize: hp(2.5)}}>Hello</Text> 
          <Text className="font-bold tracking-wider text-neutral-700" style={{fontSize: hp(3.5)}}>Abinas</Text> 
        </View>
      </View>
      <View className="flex justify-center items-center"> 
        <Animated.Image entering={ZoomIn.delay(400).springify()} source={require('./../assets/images/slide1.png')}
          resizeMode='cover'
          style={{width: wp(90), height: wp(50) }}
          className="rounded-[15px]"
        />
      </View>
      <View className="flex-1">
        <BodyParts />
      </View>
    </SafeAreaView>
  );
}

export default Home;
