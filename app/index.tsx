import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import CustomButton from '@/components/CustomButton';
import bgImage from '@/assets/images/jb_bg.jpg';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import AppGradient from '@/components/AppGradient';

const App = () => {
  const router = useRouter();
  return (
    <View className="flex-1">
      <ImageBackground 
      source={bgImage} 
      resizeMode='cover' 
      className='flex-1'
      
      >

        <AppGradient colors={["rgba(0,0,0,0.4","rgba(0,0,0,0.8"]}>
            <SafeAreaView className="flex-1 px-1 justify-between">
              <View>
                <Text className="text-center text-white font-bold text-4xl">
                  App Demo Test
                </Text>
                <Text className="text-center text-white">
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
        </AppGradient>
       </ImageBackground>
      </View>
  )
}

export default App;