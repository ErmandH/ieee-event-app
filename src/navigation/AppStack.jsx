import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen/LoginScreen'

const Stack = createNativeStackNavigator()

const AppStack = () => {
  return (
	<Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown:false }}>
      <Stack.Screen  name="Login" component={LoginScreen} />
  </Stack.Navigator>
  )
}

export default AppStack