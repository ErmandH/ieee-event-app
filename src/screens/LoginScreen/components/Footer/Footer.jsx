import { View } from 'react-native'
import React from 'react'
import FacebookSVG from '@assets/images/facebook.svg'
import GoogleSVG from '@assets/images/google.svg'
import TwitterSVG from '@assets/images/twitter.svg'

import AppText from '@components/AppText/AppText'
import styles from './styles'

const Footer = () => {
  return (
	<View style={{paddingVertical:15}}>
		<View style={styles.textContainer}>
			<View style={styles.line} />
			<AppText style={styles.loginWithText}>
				Or, login with...
			</AppText>
			<View style={styles.line} />
		</View>
		<View style={styles.iconsContainer}>
			<View style={styles.loginIconContainer}>
				<GoogleSVG width={32} height={32} />	
			</View>
			<View style={styles.loginIconContainer}>
				<FacebookSVG width={32} height={32} />	
			</View>
			<View style={styles.loginIconContainer}>
				<TwitterSVG width={32} height={32} />	
			</View>
			</View>
	</View>
  )
}

export default Footer