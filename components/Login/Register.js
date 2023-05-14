import { Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default Register = ({ navigation }) => {
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
        <Text style={{ fontSize: 35, fontWeight: 'bold'}}>Register</Text>
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
          <Text style = {styles.button_1}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
          <Text style = {styles.button_2}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}