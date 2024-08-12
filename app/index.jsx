import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Animated, { FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';
import { useRouter } from 'expo-router';
 
const Index = () => { 
  const router = useRouter()

  const handleMainButton = () => {
    router.push('home')
  }
  
  return (
    <View className="flex-1 flex justify-end">
      <StatusBar style="light" />
      <Image className="h-full w-full absolute" source={require('./../assets/images/welcome.png')} />
      <Text>This is Index</Text>   
      <LinearGradient
        colors={["transparent", '#18181B']}
        style={{width: wp(100), height: hp(70)}}
        start={{x: 0.5, y: 0}}
        end={{x:0.5, y:0.8}}
        className="flex justify-end pb-12 space-y-8"
      >
        <Animated.View entering={FadeInDown.delay(100).springify()} className="flex items-center">
          <Text style={{fontSize: hp(3)}} className="text-white font-bold tracking-wide">
            {/* Best <Text className="text-rose-500">Workouts</Text> */}
            Lets <Text className="text-rose-500">Workouts</Text>
          </Text> 
          {/* <Text style={{fontSize: hp(3)}} className="text-white font-bold tracking-wide">For You</Text> */}
        </Animated.View> 

        <Animated.View entering={FadeInDown.delay(100).springify()}> 
          <TouchableOpacity 
            onPress={handleMainButton}
            style={{height: hp(7), width: wp(80)}}
            className="bg-rose-500 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200"
          >
            <Text style={{fontSize: hp(3)}} className="text-white font-bold tracking-widest">
              Get Started
            </Text>
          </TouchableOpacity>
        </Animated.View> 
      </LinearGradient>
    </View>
  );
} 

export default Index;
