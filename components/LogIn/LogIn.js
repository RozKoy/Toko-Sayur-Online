import { Image, Text, View, TextInput, TouchableOpacity } from 'react-native';

import { normalize } from '../Normalize';

export default LogIn = ({ navigation }) => {
	return(
		<View style={styles.container}>
			<View style={styles.headerLogIn}>
				<Image
					style={{width: '50%'}}
					source={require('../../assets/Logo.png')}
				/>
				<Text style={{ fontSize: 35, fontWeight: 'bold'}}>Login</Text>
			</View>
			
			<View style={styles.content}>
				<TextInput
					style={styles.input}
					placeholder="Email"
					selectTextOnFocus={false}
				/>
				<TextInput
					style={styles.input}
					placeholder="Password"
				/>
				<TouchableOpacity style = {styles.button_1} onPress={() => navigation.navigate('Home')}>
					<Text style={{ fontSize: normalize(14), color: '#FFF' }}>Login</Text>
				</TouchableOpacity>
				<TouchableOpacity style = {styles.button_2} onPress={() => navigation.navigate('Register')}>
					<Text style={{ fontSize: normalize(14) }}>Register</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
					<Text style = {styles.password}>Forgot Password ?</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}