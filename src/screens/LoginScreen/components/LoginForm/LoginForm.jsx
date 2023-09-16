import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import AppText from '@components/AppText/AppText'
import InputField from '@components/InputField/InputField'
import { Feather, AntDesign } from '@expo/vector-icons';
import { useTogglePasswordVisibility } from '@hooks/useTogglePasswordVisibility'
import AppButton from '@components/Button/AppButton'
const LoginForm = () => {
	const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();

	return (
		<View>
			<View style={{marginTop:15, gap:4}}>
				<AppText variant='subheader'>Email</AppText>
				<InputField 
					label='E-Mail'
					inputType='email'
					keyboardType='email-address'
					icon={<AntDesign name="mail" size={18} color="black" />}
				/>
			</View>
			<View style={{marginTop:15, gap:4}}>
				<AppText variant='subheader'>Password</AppText>
				<InputField 
					label='Password'
					inputType='password'
					icon={<AntDesign name="lock" size={18} color="black" />}
					fieldButtonIcon={<Feather name={rightIcon} size={18} color="black" />}
					fieldButtonFunction={handlePasswordVisibility}
					secureTextEntry={passwordVisibility}
				/>
			</View>
			<AppButton style={{ marginTop:30 }} label='Log In'></AppButton>
		</View>
	)
}

export default LoginForm