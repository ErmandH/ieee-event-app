import { StyleSheet } from "react-native";
import theme from '../../theme/theme'

const styles = StyleSheet.create({
	buttonContainer:{
		backgroundColor:theme.colors.primary,
		padding:15,
		borderRadius:10,
		justifyContent:'center',
		alignItems:'center'
	},
	buttonText:{
		color:'#fff',
		fontSize:theme.fontSizes.body,
		fontFamily: 'Nunito-Bold'
	},
});

export default styles