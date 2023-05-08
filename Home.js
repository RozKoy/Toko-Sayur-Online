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
            fontSize: 15,
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
          marginTop: 11,
      
        }}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('')}>
              <Image source={require('../assets/sayuran.svg')} />
            </TouchableOpacity>
                      <Text style={{fontSize:12,
              fontWeight:'medium',color:'#0D986A',
            }}>Sayuran</Text>
          </View>

          <View style={{justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('')}>
              <Image source={require('../assets/buah.svg')} />
            </TouchableOpacity>
                      <Text style={{fontSize:12,
              fontWeight:'medium',color:'#0D986A',
            }}>Buahan</Text>
          </View>

          <View style={{justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('')}>
              <Image source={require('../assets/paketSayur.svg')} />
            </TouchableOpacity>
                    <Text style={{fontSize:12,
            fontWeight:'medium',color:'#0D986A',
          }}>Paket Sayur</Text>
          </View>

          <View style={{justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('')}>
              <Image source={require('../assets/paketBuah.svg')} />
            </TouchableOpacity>
                    <Text style={{fontSize:12,
            fontWeight:'medium',color:'#0D986A',
          }}>Paket Buah</Text>
          </View>

          <View style={{justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('')}>
              <Image source={require('../assets/paketCampur.svg')} />
            </TouchableOpacity>
                      <Text style={{fontSize:12,
              fontWeight:'medium',color:'#0D986A',
            }}>Paket Campur</Text>
          </View>

        

      </View>


      <View style={{width:300,height:120, backgroundColor:'#DCE8D6',borderRadius:10,marginTop:12,marginLeft:12}}>
        <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/Intersect.png')} />

            <View style={{marginTop:30,marginLeft:20}}>
              <Text style={{fontSize:12.57,fontWeight:'bold',color:'#002140'}}>Nama Sayuran</Text>
              <Text style={{fontSize:12.57,fontWeight:'medium',color:'#002140'}}>Rp 0000/Kg</Text>
            </View>

            
        </View>
      </View>

      <View style={{width:293,height:120, backgroundColor:'#D6E4E8',borderRadius:10,marginTop:20,marginLeft:12}}>
        <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/Intersect.png')} />

            <View style={{marginTop:30,marginLeft:20}}>
             <Text style={{fontSize:12.57,fontWeight:'bold',color:'#002140'}}>Nama Sayuran</Text>
              <Text style={{fontSize:12.57,fontWeight:'medium',color:'#002140'}}>Rp 0000/Kg</Text>
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
     width:'100%',
     height:60,
     backgroundColor:'#FFFFFF',
     borderRadius:15,

   },


});

export default Home;
