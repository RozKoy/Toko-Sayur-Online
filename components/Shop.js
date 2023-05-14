import {
  Image,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  FontAwesome5,
} from '@expo/vector-icons';

const Shop = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logo}>
          <Image style={{width:35,height:35}} source={require('../assets/Logo.png')}/>
          <Text
            style={{ fontSize: 18, color: '#0D986A', fontWeight: 'bold'}}>
            Toko Sayuran
          </Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <FontAwesome5
            style={{ paddingRight: 10 }}
            name="search"
            size={20}
            color="#435B71"
          />
        </View>
      </View>

      {/* Body */}
      <ScrollView style={{paddingBottom: 15}}>
      
      <View style={styles.items}>
        <View style={{flexDirection:'row'}}>
            <Image style={{width:125,height:100, margin: 10, borderRadius: 10}} source={require('../assets/cabaiMerah.jpg')} />
            <View style={{margin: 'auto', width: 125}}>
              <Text style={{fontSize:16,fontWeight:'bold',color:'#000', textAlign: 'center'}}>Cabai Merah</Text>
          <TouchableOpacity onPress={() => navigation.navigate('DetailProduct')}><Text style = {styles.buy}
              >Beli</Text></TouchableOpacity>
            </View>
        </View>
      </View>

      <View style={styles.items}>
        <View style={{flexDirection:'row'}}>
            <Image style={{width:125,height:100, margin: 10, borderRadius: 10}} source={require('../assets/cabaiMerah.jpg')} />
            <View style={{margin: 'auto', width: 125}}>
              <Text style={{fontSize:16,fontWeight:'bold',color:'#000', textAlign: 'center'}}>Cabai Merah</Text>
          <TouchableOpacity onPress={() => navigation.navigate('DetailProduct')}><Text style = {styles.buy}
              >Beli</Text></TouchableOpacity>
            </View>
        </View>
      </View>

      <View style={styles.items}>
        <View style={{flexDirection:'row'}}>
            <Image style={{width:125,height:100, margin: 10, borderRadius: 10}} source={require('../assets/cabaiMerah.jpg')} />
            <View style={{margin: 'auto', width: 125}}>
              <Text style={{fontSize:16,fontWeight:'bold',color:'#000', textAlign: 'center'}}>Cabai Merah</Text>
          <TouchableOpacity onPress={() => navigation.navigate('DetailProduct')}><Text style = {styles.buy}
              >Beli</Text></TouchableOpacity>
            </View>
        </View>
      </View>

      <View style={styles.items}>
        <View style={{flexDirection:'row'}}>
            <Image style={{width:125,height:100, margin: 10, borderRadius: 10}} source={require('../assets/cabaiMerah.jpg')} />
            <View style={{margin: 'auto', width: 125}}>
              <Text style={{fontSize:16,fontWeight:'bold',color:'#000', textAlign: 'center'}}>Cabai Merah</Text>
          <TouchableOpacity onPress={() => navigation.navigate('DetailProduct')}><Text style = {styles.buy}
              >Beli</Text></TouchableOpacity>
            </View>
        </View>
      </View>

      <View style={styles.items}>
        <View style={{flexDirection:'row'}}>
            <Image style={{width:125,height:100, margin: 10, borderRadius: 10}} source={require('../assets/cabaiMerah.jpg')} />
            <View style={{margin: 'auto', width: 125}}>
              <Text style={{fontSize:16,fontWeight:'bold',color:'#000', textAlign: 'center'}}>Cabai Merah</Text>
          <TouchableOpacity onPress={() => navigation.navigate('DetailProduct')}><Text style = {styles.buy}
              >Beli</Text></TouchableOpacity>
            </View>
        </View>
      </View>

      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/Home.svg')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Shop')}>
          <Image source={require('../assets/Shop.svg')} />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate('History')}> 
          <Image source={require('../assets/Nota.svg')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
          <FontAwesome5
              style={{ paddingRight: 12 }}
              name="user"
              size={20}
              color="#435B71"
            />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Shop;