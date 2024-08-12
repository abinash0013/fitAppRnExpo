import { useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { fetchExerciseByBodyPart } from '../api/exerciseDb'
import { useLocalSearchParams, useRouter } from 'expo-router'

export default function Exercises() {
  
  const router = useRouter();
  const item = useLocalSearchParams();
  console.log("itemLog", item);

  useEffect(()=>{
    if(item) getExercises(item.name)
  },[item])
  
  const getExercises = async (bodyParts) => {
    console.log("bodyPartsLog", bodyParts);
    let data = await fetchExerciseByBodyPart(bodyParts)
    console.log("dataLoggg", data);
  }

  return (
    <View className="mt-20">
      <Text>exercises</Text>
      <TouchableOpacity onPress={() => router.back()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  )
}