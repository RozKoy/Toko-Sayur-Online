import { React, useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  MaterialIcons,
  Feather,
  Fontisto,
  FontAwesome5,
} from '@expo/vector-icons';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.atas}>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>

            <Image style={{width:35,height:35}} source={require('../assets/logoToko1.png')}/>
            <Text
              style={{ fontSize: 18, color: '#0D986A', fontWeight: 'bold',marginTop:5 }}>
              Toko Sayuran
            </Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <FontAwesome5
              style={{ paddingRight: 12 }}
              name="search"
              size={20}
              color="#435B71"
            />

            <TouchableOpacity onPress={() => navigation.navigate('')}>
               <Image source={require('../assets/shop.svg')} />
             </TouchableOpacity>
           
          </View>
        </View>
      </View>


 <View style={{width:307,height:122, backgroundColor:'#D9D9D9',borderRadius:10,marginTop:20,marginLeft:12}}>
        <View style={{flexDirection:'row'}}>
            <Image style={{width:125,height:100,marginTop:10,marginLeft:10}} source={require('../assets/cabaimerah.jpg')} />

            <View style={{marginTop:30,marginLeft:30}}>

              <Text style={{fontSize:20,fontWeight:'bold',color:'#002140'}}>Cabai Merah</Text>
          <TouchableOpacity onPress={() => navigation.navigate('')}><Text style = {styles.search}
              >Beli</Text></TouchableOpacity>
            </View>
            
        </View>
      </View>

      <View style={{width:307,height:122, backgroundColor:'#D9D9D9',borderRadius:10,marginTop:20,marginLeft:12}}>
        <View style={{flexDirection:'row'}}>
            <Image style={{width:125,height:100,marginTop:10,marginLeft:10}} source={require('../assets/cabaimerah.jpg')} />

              <View style={{marginTop:30,marginLeft:30}}>
              <Text style={{fontSize:20,fontWeight:'bold',color:'#002140'}}>Cabai Merah</Text>
          <TouchableOpacity onPress={() => navigation.navigate('')}><Text style = {styles.search}
              >Beli</Text></TouchableOpacity>
            </View>
        </View>

      </View>
       <View style={{width:307,height:122, backgroundColor:'#D9D9D9',borderRadius:10,marginTop:20,marginLeft:12}}>
        <View style={{flexDirection:'row'}}>
          <Image style={{width:125,height:100,marginTop:10,marginLeft:10}} source={require('../assets/cabaimerah.jpg')} />

            <View style={{marginTop:30,marginLeft:30}}>
              <Text style={{fontSize:20,fontWeight:'bold',color:'#002140'}}>Cabai Merah</Text>
          <TouchableOpacity onPress={() => navigation.navigate('')}><Text style = {styles.search}
              >Beli</Text></TouchableOpacity>
            </View>

            
        </View>
      </View>

      <View style={{width:307,height:122, backgroundColor:'#D9D9D9',borderRadius:10,marginTop:20,marginLeft:12}}>
        <View style={{flexDirection:'row'}}>
            <Image style={{width:125,height:100,marginTop:10,marginLeft:10}} source={require('../assets/cabaimerah.jpg')} />

          <View style={{marginTop:30,marginLeft:30}}>
              <Text style={{fontSize:20,fontWeight:'bold',color:'#002140'}}>Cabai Merah</Text>
          <TouchableOpacity onPress={() => navigation.navigate('')}><Text style = {styles.search}
              >Beli</Text></TouchableOpacity>
            </View>
        </View>

      </View>
       
      

      <View style={styles.card}>

        <View style={{flexDirection:'row', justifyContent:'space-around',marginTop:25}}>
          <TouchableOpacity onPress={() => navigation.navigate('')}>
            <Image source={require('../assets/home.svg')} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('')}>
            <Image source={require('../assets/shop.svg')} />
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => navigation.navigate('')}> 
            <Image source={require('../assets/nota.svg')} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('')}>
            <FontAwesome5
                style={{ paddingRight: 12 }}
                name="user"
                size={20}
                color="#435B71"
              />
          </TouchableOpacity>
        
        </View>

      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  top: {
    width: '100%',
    alignItems: 'center',
    padding: 11,
    marginTop: 10,
  },
  atas: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
   card: {
     marginTop:70,
     width:'100%',
     height:60,
     backgroundColor:'#FFFFFF',
     borderRadius:15,

   },

   search:{
     marginTop:5,
     width:110,
     height:25,
     backgroundColor:'red',
     borderRadius:5,
     textAlign:'center',
     color:'white',
   }



});

export default Home;
