import { View, Text, Pressable } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'
import { StatusBar } from 'expo-status-bar'
import { FlatList } from 'react-native-gesture-handler'

const Contact = () => {
  return (
    <View className='flex-1 justify-center items-center'>
      <AppGradient colors={["#161b2e","#0a4d4a", "#766e67"]}>
          <View className="mb-6">
              <Text className="text-gray-200 mb-3 font-bold text-4xl text-left">
                    Contact
                </Text>
                <Text className="text-indigo-100 text-xl font-medium">
                    Start your app.
                </Text>
          </View>
          <View>
            <Pressable
                onPress={() => console.log('press')}
                className="h-48 my-3 font-bold"/>
          </View>
      </AppGradient>
      <StatusBar style='light'/>
    </View>
  )
}

export default Contact;