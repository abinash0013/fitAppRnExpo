import React from 'react';
import ImageSlider from '../components/ImageSlider';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { FadeIn, FadeInDown, FadeOut, FadeInRight, withSequence, withTiming, StretchInX, StretchOutY  } from 'react-native-reanimated';

import BodyParts from '../components/BodyParts';

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-white flex space-y-8" edges={['top']}>
      <StatusBar style="dark" />
      <View className="flex-row justify-between item-center mx-5">
        <View className="space-y-2">
          <Text className="font-bold tracking-wider text-neutral-700" style={{fontSize: hp(4.5)}}>Abinash</Text> 
        </View>
        <View className="flex-row justify-between items-center">          
          <View 
            className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300"
            style={{height: hp(5.5), width: hp(5.5)}}
          >
            <Ionicons name="notifications" size={hp(3)} color="gray" />
          </View> 
          <Image
            source={require('./../assets/images/avatar.png')}
            style={{height: hp(5.5), width: hp(5.5)}}
            className="rounded-full ml-2"
          />
        </View>
      </View>
      <View className="flex justify-center items-center"> 
      <Animated.Image entering={StretchInX} exiting={StretchOutY} source={require('./../assets/images/slide1.png')}
        resizeMode='cover'
        style={{width: wp(90), height: wp(52) }}
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
