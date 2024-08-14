import { useCallback, useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { fetchExerciseByBodyPart, makeRequest } from '../api/exerciseDb'
import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ExerciseList from '../components/ExerciseList';
import { ScrollView } from 'react-native-virtualized-view';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

export default function Exercises() {
   
  const router = useRouter();

  const [bodyPart, setBodyPart] = useState([])
  const localSearchParam = useLocalSearchParams()
  const bodyPartParam = localSearchParam.name

  const getExerciseByBodyPart = useCallback(async () => {
    try {
      const res = await makeRequest.get("/exercises/bodyPart/" + bodyPartParam)
      // console.log("resLog",res.data)
      setBodyPart(res.data)
    } catch (error) {
      console.log(error)
    }
  }, [bodyPartParam])

  useEffect(() => {
    getExerciseByBodyPart(bodyPartParam)
  }, [getExerciseByBodyPart])

  return (
    <ScrollView>
      <StatusBar style="light" />
      <Animated.Image 
        source={localSearchParam.image}
        style={{width: wp(100), height: hp(45) }}
        className="rounded-b-[40px]"
        // entering={FadeInUp.delay(200).springify()}
      />
      <TouchableOpacity 
        onPress={()=>router.back()}
        className="bg-rose-500 mx-4 absolute flex justify-center items-center pr-1 rounded-full" 
        style={{marginTop: hp(7), height: hp(5), width: hp(5)}}>
        <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
      </TouchableOpacity>
      <View className="mx-4 space-y-3 at-4">
        <Text style={{fontSize: hp(3)}} className='font-semibold text-neutral-700'>
          {localSearchParam.name} exercises
        </Text>
        <View className="mb-10">
          <ExerciseList data={bodyPart}  />
        </View>
      </View>
    </ScrollView>
  )
}