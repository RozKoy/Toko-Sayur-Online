import {React,useState} from "react";
import { Image, StyleSheet, Text, Button, View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons, Feather, Fontisto, FontAwesome5, AntDesign } from '@expo/vector-icons';

const Register = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={ () => navigation.goBack()}
            >
            <AntDesign name="arrowleft" size={35} color="black" />
            </TouchableOpacity>
            <View style={styles.top}>
              <Feather name="menu" size={24} color="white" />
              <FontAwesome5 name="user" size={24} color="white" />
            </View>
            <Image
          style={{width: 200, height:250, borderRadius:10}}
          source={require('../assets/logo_sayur.png')}
          />
          <Text style={styles.caption}>Register</Text>
            <View style={styles.content}>
              <View style={styles.masukkan}>
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  selectTextOnFocus={false}
                />
              </View>
              <View style={styles.masukkan}>
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                />
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('')}>
              <View style={styles.kotak_login}>
                <Text style = {styles.teks_login}>Register</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Index')}>
              <View style={styles.kotak_register}>
                <Text style = {styles.teks_register}>Login</Text>
              </View>
              </TouchableOpacity>
            </View>       
        </View>
    );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    width :"100%",
    overflow: "hidden",
    alignItems: "center",
    backgroundColor: 'white',
 },
 button:{
    position:'absolute',
    top:60,
    left: 25,
    zIndex:99
    
 },
 caption: {
  fontSize:40,
  fontWeight: "bold"

 },
 top: {
    width: "100%",
    flexDirection:'row',
    alignItems: 'center',
    padding:40,
    justifyContent: 'space-between'
 },
 masukkan: {
    width: '100%',
    flexDirection:'row',
    alignItems: 'center',
    marginBottom:90,
    marginTop: -80,
    paddingLeft:10,
    borderWidth:1,
    borderRadius:10,
    borderColor: '#D6E4E8',
    backgroundColor: '#D6E4E8'
    
 },
 header: {
    color: '#ffff',
    fontSize: 30,
    fontWeight : "bold",
    top: 35
  },
  kotak_login: {
    width: '70%',
    height: 40,
    marginLeft: 50,
    marginBottom : 10,
    marginTop: -50,
    backgroundColor: "#447055",
    borderRadius: 10,

  },
  teks_login: {
    color : '#ffff',
    textAlign: "center",
    fontweight : "Bold",
    paddingTop:8,
    fontSize: 18,
  },
  kotak_register: {
    width: '70%',
    height: 40,
    marginLeft: 50,
    marginBottom : 10,
    backgroundColor: "#C3DCB7",
    borderRadius: 10,
  },
  teks_register: {
    color : '#black',
    textAlign: "center",
    fontweight : "Bold",
    paddingTop:8,
    fontSize: 18,
  },
  password: {
    marginLeft: 50,
    textDecorationLine: "underline",
    color: "#BFBFBF"
  },

  header2: {
    margin: 5,
    fontWeight : "bold",

  },
  content: {
    top : 100,
    backgroundColor: 'white',
    margin: "auto",
    width: '90%',
    padding:20,
    borderRadius:10,
  },
  input: {
    height: 40,
    width: '100%',
    padding: 10,
    borderRadius:3,
  },
});

export default Register;