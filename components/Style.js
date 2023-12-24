import { StyleSheet } from 'react-native';
import { normalize } from './Normalize';

export default styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		width: '100%',
		backgroundColor: 'white',
		overflow: 'auto',
		paddingTop: normalize(30)
	},

	header: {
		flexDirection: 'row',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: normalize(10),
	},
	headerLogIn: {
		alignItems: 'center',
		marginTop: normalize(100),
	},
	logo: {
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center'
	},
	title: { 
		fontSize: normalize(18),
		color: '#0D986A', 
		fontWeight: 'bold'
	},
	searchBox:{
		fontSize:normalize(14),
		width: normalize(100),
		color: '#ccc',
		borderColor:"#ccc",
		padding: normalize(5),
		borderWidth: 1,
		borderRadius: 5,
		marginRight: normalize(5),
	 },
	
	content: {
		marginTop: 20,
		alignItems: 'center'
	},
	input: {
		backgroundColor: '#D6E4E8',
		width: '80%',
		padding: 10,
		margin: 5,
		borderRadius:10,
	},
	backButton: {
		width: normalize(50),
		margin: normalize(15),
	},
	button_1: {
		alignItems: 'center',
		padding: 5,
		width: normalize(100),
		backgroundColor: "#447055",
		borderRadius: 10,
		margin: 10,
		marginTop: 15,
	},
	button_2: {
		alignItems: 'center',
		backgroundColor: "#C3DCB7",
		color : '#black',
		padding: 5,
		margin: 10,
		marginTop: 0,
		width: normalize(100),
		borderRadius: 10,
	},
	password: {
		textAlign: 'center',
		textDecorationLine: "underline",
		color: "#BFBFBF"
	},

	kategori: {
		alignItems: 'center',
	},
	items: {
		shadowColor: '#0D986A',
		shadowRadius: 5,
		shadowOpacity: 0.25,
		borderRadius:10,
		justifyContent: 'center',    
		marginTop: normalize(10),
		padding: normalize(10)
	},
	text:{
		textAlign: 'center',
		fontSize:normalize(10),
		fontWeight:'medium',
		color:'#0D986A',
		width: normalize(50),
	},
	buy:{
		margin: 'auto',
		marginTop:5,
		width: 80,
		padding: 5,
		backgroundColor:'#0D986A',
		borderRadius:10,
		textAlign:'center',
		color:'white',
	},

	footer: {
		backgroundColor:'#fff',
		flexDirection:'row', 
		justifyContent:'space-around',
		padding: normalize(15),
		paddingBottom: normalize(20),
		borderTopStartRadius: 15,
		borderTopEndRadius: 15,
		shadowOpacity: 0.5,
		shadowColor: '#000',
		shadowRadius: 10,
	},
	navtab: {
		width: normalize(25),
		height: normalize(25),
	}
});