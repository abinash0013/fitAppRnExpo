import { Image } from 'expo-image';  
import { useLocalSearchParams, useRouter } from 'expo-router'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Animated, { FadeIn, FadeInDown, FadeOut, FadeInRight, withSequence, withTiming, StretchInX, StretchOutY, ZoomIn  } from 'react-native-reanimated';

import Ionicons from 'react-native-vector-icons/Ionicons'; 

export default function ExerciseDetails() {
  const localSearchParam = useLocalSearchParams()  
  const router = useRouter()
  const bodyPartParam = localSearchParam.name

  const handleCloseModal = async () => {
    alert("adfadf")
  }

  return (
    <View className="flex flex-1">
      <Animated.View 
        className="shadow-md bg-neutral-200 rounded-b-[40px]"
        entering={FadeInDown.duration(400).delay(300).springify()}
      >     
        <TouchableOpacity 
          onPress={()=>router.back()}
          className="bg-rose-500 mx-4 absolute flex justify-center items-center pr-1 rounded-full" 
          style={{marginTop: hp(7), height: hp(5), width: hp(5), position:"absolute", zIndex:9}}>
          <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
        </TouchableOpacity> 
        <Image 
          source={{uri: localSearchParam.gifUrl}}
          contentFit='cover'
          style={{width: wp(100), height: wp(100) }}
          className="rounded-b-[40px]"
        />
      </Animated.View> 
      <ScrollView className="mx-4 space-y-2 mt-3" showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 50}}>
        <Animated.Text 
          entering={FadeInDown.duration(400).delay(300).springify()}
          className="font-semibold text-neutral-800"
          style={{fontSize: hp(3.5)}} 
        >
          {localSearchParam.name}
        </Animated.Text>
        <Animated.Text 
          entering={FadeInDown.duration(400).delay(300).springify()}
          className="tracking-wide text-neutral-700"
          style={{fontSize: hp(2)}} 
        > 
          Equipment: <Text className="font-bold text-neutral-800">{localSearchParam?.equipment}</Text> 
        </Animated.Text>
        <Animated.Text 
          entering={FadeInDown.duration(400).delay(300).springify()}
          className="tracking-wide text-neutral-700"
          style={{fontSize: hp(2)}} 
        >
          Secondary Muscles: <Text className="font-bold text-neutral-800">{localSearchParam?.secondaryMuscles}</Text> 
        </Animated.Text>
        <Animated.Text 
          entering={FadeInDown.duration(400).delay(300).springify()} 
          className="tracking-wide text-neutral-700"
          style={{fontSize: hp(2)}} 
        >
          Target Muscles: <Text className="font-bold text-neutral-800">{localSearchParam?.target}</Text> 
        </Animated.Text>
        <Animated.Text 
          entering={FadeInDown.duration(400).delay(300).springify()} 
          className="tracking-wide text-neutral-700"
          style={{fontSize: hp(2)}} 
        >
          Instructions: 
        </Animated.Text>
        {
          localSearchParam.instructions.split(',').map((instruction, index) => {
            return (
              <Animated.Text 
                entering={FadeInDown.delay((index+6)*100).duration(200).springify()}
                key={instruction}
                style={{fontSize: hp(1.5)}}
                className="text-neutral-800"
              >
                {index + 1 + " : " + instruction.trim()}
              </Animated.Text>
            )
          })
        }
      </ScrollView>
    </View>
  )
}