import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import CustomButton from '@/components/CustomButton';
import bgImage from '@/assets/images/thumb_600.png';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const App = () => {
  const router = useRouter();
  return (
    <View className="flex-1">
      <ImageBackground 
      source={bgImage} 
      resizeMode='cover' 
      className='flex-1'
      
      >
        <LinearGradient 
        className='flex-1' 
        colors={["rgb(0,00,0.4", "rgba(0,0,0,0.8)"]}
        >
          <SafeAreaView className="flex-1 mx-5 my-12 justify-between">
            <View>
              <Text className="text-center text-black font-bold text-4xl">
                App Demo Test
              </Text>
              <Text className="text-center text-black">
                  Testing for React
              </Text>
            </View>

            <View>
              <CustomButton 
                onPress={() => router.push("/contact")} 
                title='Get Started'
                />
            </View>

            <StatusBar style="light"/>
            </SafeAreaView>
        </LinearGradient>
      
      </ImageBackground>
      </View>
  )
}

export default App;