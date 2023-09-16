import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import theme from '../../theme/theme'

const InputField = ({ label, icon, inputType, keyboardType, fieldButtonIcon ,fieldButtonLabel, fieldButtonLabelStyle , fieldButtonFunction, inputStyle, style, secureTextEntry, value, onChangeText }) => {

	return (
		<View style={[styles.inputContainer, style]}>
			{icon ? icon : ''}
			{inputType === 'password' 
			? (
				<TextInput 
				placeholder={label}
				style={[styles.textInput, inputStyle, { marginLeft: icon ? 4 : 0 }]} 
				keyboardType={keyboardType}
				secureTextEntry={secureTextEntry}
				value={value}
				onChangeText={onChangeText}
				/>
			)
			: (
				<TextInput 
				placeholder={label}
				style={[styles.textInput, inputStyle, { marginLeft: icon ? 4 : 0 }]} 
				keyboardType={keyboardType}
				value={value}
				onChangeText={onChangeText}
				/>
			)}

			{fieldButtonIcon
			? (
				<TouchableOpacity onPress={fieldButtonFunction}>
					{fieldButtonIcon}
				</TouchableOpacity>
			) : ''
			}

			{fieldButtonLabel
			? (
				<TouchableOpacity onPress={fieldButtonFunction}>
					<Text style={[styles.link, fieldButtonLabelStyle]}>{fieldButtonLabel}</Text>
				</TouchableOpacity>
			)
			: '' 
			}
		</View>
	)
}

const styles = StyleSheet.create({
	inputContainer:{
		flexDirection:'row',
		alignItems:'center',
		borderBottomColor:'#737373',
		borderBottomWidth:1,
	},
	textInput:{
		flex:1,
		paddingVertical:0,
		fontSize: theme.fontSizes.body
	},
	link:{
		color: theme.colors.dark,
		fontWeight:'500'
	},
})

export default InputField