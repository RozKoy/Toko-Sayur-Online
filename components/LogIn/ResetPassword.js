import { Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { normalize } from '../Normalize';

export default ResetPassword = ({ navigation }) => {
	return(
		<View style={styles.container}>
			<TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
				<AntDesign name="arrowleft" size={25} color="black" />
			</TouchableOpacity>
			
			<View style={styles.headerLogIn}>
				<Image
					style={{width: '50%'}}
					source={require('../../assets/Logo.png')}
				/>
				<Text style={{ fontSize: 35, fontWeight: 'bold'}}>Reset Password</Text>
			</View>
				
			<View style={styles.content}>
				<TextInput
					style={styles.input}
					placeholder="Current Password"
					selectTextOnFocus={false}
				/>
				<TextInput
					style={styles.input}
					placeholder="New Password"
				/>
				<TouchableOpacity style = {styles.button_1} onPress={() => navigation.navigate('LogIn')}>
					<Text style={{ fontSize: normalize(14), color: '#FFF' }}>Submit</Text>
				</TouchableOpacity>
			</View>       
		</View>
	);
}