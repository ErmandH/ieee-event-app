import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import theme from '../../theme/theme'

const AppText = ({ children, variant, color, style }) => {
	let textColor = '#000';
	let fontFamily = 'Nunito-Regular';
	if (variant == 'subheader'){
		fontFamily = 'Nunito-SemiBold'
	}
	else if (variant == 'header'){
		fontFamily = 'Nunito-Bold'
	}
	if (theme.colors[color]){
		textColor = theme.colors[color]
	}
	else if (color){
		textColor = color
	}
	const textStyle = {
		...styles.textStyle,
		color: textColor,
		fontSize: theme.fontSizes[variant] ? theme.fontSizes[variant] : theme.fontSizes['body'],
		fontFamily: fontFamily
	}

  return (
	  <Text style={[textStyle, style]}>{children}</Text>
  )
}

export default AppText