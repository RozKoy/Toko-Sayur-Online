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

            <Image style={{width:40,height:40}} source={require('../assets/logoToko1.png')}/>
            <Text
              style={{ fontSize: 23, color: '#0D986A', fontWeight: 'bold',marginTop:5 }}>
              Toko Sayuran
            </Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <FontAwesome5
              style={{ paddingRight: 12 }}
              name="search"
              size={21}
              color="#435B71"
            />

            <TouchableOpacity onPress={() => navigation.navigate('')}>
               <Image style={{width:21,height:21}} source={require('../assets/shop.png')} />
             </TouchableOpacity>
           
          </View>
        </View>
      </View>

      <View style={{alignItems:'center'}}>

        <TouchableOpacity onPress={() => navigation.navigate('')}>
          <Image style={{width:270, height:150,marginTop:20}}source={require('../assets/sayurmix.jpg')} />
          
         </TouchableOpacity>

      </View>

      <View>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 16,
            fontSize: 19,
            fontWeight: 'bold',
            color: '#002140',
          }}>
          Kategori Produk
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 20,
      
        }}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('')}>
              <Image style={{width:35,height:30}} source={require('../assets/sayuran1.png')} />
            </TouchableOpacity>
                      <Text style={{fontSize:12,
              fontWeight:'medium',color:'#0D986A',
            }}>Sayuran</Text>
          </View>

          <View style={{justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('')}>
              <Image style={{width:32,height:30}} source={require('../assets/buah.png')} />
            </TouchableOpacity>
                      <Text style={{fontSize:12,
              fontWeight:'medium',color:'#0D986A',
            }}>Buahan</Text>
          </View>

          <View style={{justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('')}>
              <Image style={{width:40,height:30}} source={require('../assets/paketSayur.png')} />
            </TouchableOpacity>
                    <Text style={{fontSize:12,
            fontWeight:'medium',color:'#0D986A',
          }}>Paket Sayur</Text>
          </View>

          <View style={{justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('')}>
              <Image style={{width:33,height:30}} source={require('../assets/paketBuah.png')} />
            </TouchableOpacity>
                    <Text style={{fontSize:12,
            fontWeight:'medium',color:'#0D986A',
          }}>Paket Buah</Text>
          </View>

          <View style={{justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('')}>
              <Image style={{width:45,height:30}} source={require('../assets/paketCampur.png')} />
            </TouchableOpacity>
                      <Text style={{fontSize:12,
              fontWeight:'medium',color:'#0D986A',
            }}>Paket Campur</Text>
          </View>

        

      </View>


      <View style={{width:350,height:150, backgroundColor:'#DCE8D6',borderRadius:10,marginTop:25,marginLeft:12,paddingTop:20}}>
        <View style={{flexDirection:'row',paddingLeft:20}}>
            <Image style={{width:100,height:110,borderRadius:5}} source={require('../assets/brokoli1.jpg')} />

            <View style={{marginTop:30,marginLeft:20}}>
              <Text style={{fontSize:17,fontWeight:'bold',color:'#002140'}}>Nama Sayuran</Text>
              <Text style={{fontSize:15,fontWeight:'medium',color:'#002140'}}>Rp 0000/Kg</Text>
            </View>

            
        </View>
      </View>

      <View style={{width:340,height:150, backgroundColor:'#D6E4E8',borderRadius:10,marginTop:20,marginLeft:12, paddingTop:20}}>
        <View style={{flexDirection:'row',paddingLeft:20}}>
            <Image style={{width:100,height:110,borderRadius:5}} source={require('../assets/brokoli1.jpg')} />

            <View style={{marginTop:30,marginLeft:20}}>
             <Text style={{fontSize:17,fontWeight:'bold',color:'#002140'}}>Nama Sayuran</Text>
              <Text style={{fontSize:15,fontWeight:'medium',color:'#002140'}}>Rp 0000/Kg</Text>
            </View>
        </View>

      </View>

      <View style={styles.card}>

        <View style={{flexDirection:'row', justifyContent:'space-around',marginTop:25}}>
          <TouchableOpacity onPress={() => navigation.navigate('')}>
            <Image style={{width:20,height:20}} source={require('../assets/home.png')} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('')}>
            <Image style={{width:19,height:20}} source={require('../assets/shopping.png')} />
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => navigation.navigate('')}> 
            <Image style={{width:20,height:20}} source={require('../assets/invoice.png')} />
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
    padding: 15,
    marginTop: 50,
  },
  atas: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
   card: {
     width:'100%',
     height:60,
     backgroundColor:'#FFFFFF',
    
     borderRadius:15,
     marginTop:30,

   },


});

export default Home;
