import theme from '@theme/theme'
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	loginIconContainer:{
		borderColor:theme.colors.muted,
		borderWidth:1,
		padding:12,
		borderRadius:12
	},
	iconsContainer:{
		flexDirection:'row', 
		justifyContent:'center', 
		marginTop:20, 
		gap:20
	},
	textContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	line: {
		flex: 1,
		height: 1,
		backgroundColor: 'black',
	},
	loginWithText: {
		paddingHorizontal: 10,
		color:theme.colors.muted
	},
});

export default styles;