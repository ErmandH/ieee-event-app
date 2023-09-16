import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppText from '../../components/AppText/AppText'
import styles from './styles'

import LoginForm from './components/LoginForm/LoginForm'
import Footer from './components/Footer/Footer'
const LoginScreen = () => {
  return (
	<SafeAreaView style={{flex:1}}>
	  <Image
	 	source={require('../../assets/images/login_img.png')}
		style={styles.image}
	  />
	  <View style={styles.container}>
		<View style={{ gap:8 }}>
			<AppText variant='header' style={styles.heading}>Hello Again!</AppText>
			<AppText variant='body' style={styles.textMuted}>Welcome back, you’ve been missed</AppText>
		</View>
		<LoginForm />
		<Footer />
	  </View>
	</SafeAreaView>
  )
}

export default LoginScreen