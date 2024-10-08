import { useRouter } from 'expo-router';
import { bodyParts } from '../constants' 
import { LinearGradient } from 'expo-linear-gradient'; 
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import Animated, { FadeIn, FadeInDown, FadeOut, FadeInRight, withSequence, withTiming  } from 'react-native-reanimated';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function BodyParts() {
  const router = useRouter()

  return (
    <View className="mx-4">
      {/* <Animated.Text entering={FadeInRight.delay(400).springify()} style={{fontSize: hp(3)}} className="font-bold text-neutral-700">Exercises</Animated.Text> */}
      <Text style={{fontSize: hp(3)}} className="font-bold text-neutral-700">Exercises</Text>
      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={item=>item.name}
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{paddingBottom: 50, paddingTop: 20}}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        renderItem={({item, index}) => <BodyPartsCard router={router} index={index} item={item} /> }
      />
    </View>
  )
}

const BodyPartsCard = ({item, router, index}) => { 
  const handleMoveToExerciseScreen = () => {
    router.push({pathname: '/exercises', params: item}) 
  }
  return ( 
    <Animated.View entering={FadeInDown.duration(400).delay(index*200).springify().damping(7)}>
      <TouchableOpacity
        style={{width: wp(44), height: wp(52)}}
        className="flex justify-end p-4 mb-4"
        onPress={handleMoveToExerciseScreen} 
      >
        <Image
          source={item.image}
          resizeMode='cover'
          style={{width: wp(44), height: wp(52) }}
          className="rounded-[15px] absolute"
        />
        <LinearGradient 
          colors={['transparent', 'rgba(0,0,0,0.9)']}
          style={{width: wp(44), height: hp(15)}}
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 1}}
          className="absolute bottom-0 rounded-b-[15px]"
        />
        <Text  
          style={{fontSize: hp(2.3)}}
          className="text-white font-semibold text-center tracking-wide"
        >
          {item?.name}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  )
}