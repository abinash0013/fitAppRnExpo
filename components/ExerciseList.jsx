import { useRouter } from 'expo-router';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { FadeIn, FadeInDown, FadeOut, FadeInRight, withSequence, withTiming, StretchInX, StretchOutY  } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { Text } from 'react-native';
import { Image } from 'expo-image';

const ExerciseList = ({data}) => {
  const router = useRouter()
  return (
    <View>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={item=>item.name}
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{paddingBottom: 50, paddingTop: 20}}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        renderItem={({item, index}) => <ExerciseCard router={router} index={index} item={item} /> }
      />
    </View>
  );
}

const ExerciseCard = ({item, router, index}) => {  
  const handleExerciseDetails = () => {
    router.push({pathname: 'exerciseDetails', params: item})
  }
  return ( 
    <Animated.View entering={FadeInDown.duration(400).delay(index*200).springify().damping(7)}>
      <TouchableOpacity 
        onPress={handleExerciseDetails}
        className="flex py-3 space-y-2">
        <View className="bg-red-200 shadow rounded-[25px]"> 
          <Image
            source={{uri: item.gifUrl}} 
            contentFit="cover"
            style={{width: wp(44), height: wp(52)}}
            className="rounded-[25px]"
          />
        </View>
        <Text
          style={{fontSize: hp(1.7)}}
          className="text-neutral-700 font-bold text-center ml-1 tracking-wide"
        >
          {
            item?.name.length > 20 ? item.name.slice(0, 20)+'...':item?.name
          }
        </Text>
      </TouchableOpacity>
    </Animated.View> 
  )
}

const styles = StyleSheet.create({})

export default ExerciseList;
