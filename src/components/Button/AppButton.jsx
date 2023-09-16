import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import styles from './styles'
import theme from '../../theme/theme'

const AppButton = ({ onPress, label, style, color, labelStyle, size }) => {	
	const buttonContainerStyle = {
		...styles.buttonContainer,
		backgroundColor: color ? theme.colors[color] : theme.colors.primary
	}
	const buttonTextStyle = {
		...styles.buttonText,
		color: color === 'light' ? '#000' : '#fff'
	}
	return (
		<TouchableOpacity onPress={onPress} style={[buttonContainerStyle, style]} >
			<Text style={[buttonTextStyle, labelStyle]}>{label}</Text>
		</TouchableOpacity>
	)
}



export default AppButton