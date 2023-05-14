import { Image, Text, View, TextInput, TouchableOpacity } from 'react-native';

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
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style = {styles.button_1}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style = {styles.button_2}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
          <Text style = {styles.password}>Forgot Password ?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}