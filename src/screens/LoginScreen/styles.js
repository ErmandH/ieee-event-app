import { StyleSheet } from "react-native";
import theme from "../../theme/theme";

const styles = StyleSheet.create({
	container:{
		padding:20,
		justifyContent:'space-between',
		flex:1
	},
	image:{
		width:'100%',
	},
	heading:{
		textAlign:'center'
	},
	textMuted:{
		color: theme.colors.muted,
		textAlign:'center'
	}
});

export default styles