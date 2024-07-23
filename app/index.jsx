import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image } from 'react-native';
import { Link } from 'expo-router';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyl={{ height: '100%'}}>
        <View className="w-full justify-center items-center min-h-[70vh] px-4">
          <Image 
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
           <Image 
            source={images.cards}
            className="max-w-[380px] w-full h-[130px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">Find stuff with{' '}
              <Text className="text-secondary-200">Chuff</Text>
            </Text>

            <Image 
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-4 right-14"
              resizeMode="contain"
            />

          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center"
          
          >
            Dig up some treasure
          </Text>
          <CustomButton 
            title="Give Email"
            handlePress={()=>{router.push('/sign-in')}}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light'/>

      {/* <View className="flex-1 items-center justify-center bg-white"> */}
        {/* <Text className="text-3xl font-pblack">this is on</Text> */}
        {/* <StatusBar style="auto" /> */}
        {/* <Link href="/profile" style={{  color: 'blue' }}>Go Home</Link> */}
      {/* </View> */}
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
