import {
	Image,
	Text,
	TextInput,
	ScrollView,
	View,
	TouchableOpacity,
} from 'react-native';
import {
	FontAwesome5,
} from '@expo/vector-icons';

import { normalize } from './Normalize';

export default Home = ({ navigation }) => {
	return (
		<View style={styles.container}>
			{/* Header */}
			<View style={styles.header}>
				<View style={styles.logo}>
					<Image style={{width:35,height:35}} source={require('../assets/Logo.png')}/>
					<Text
						style={styles.title}>
						Toko Sayuran
					</Text>
				</View>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					 <TextInput placeholder="Cari Produk" clearButtonMode="always" style={styles.searchBox} />
					<TouchableOpacity onPress={() => navigation.navigate('Search')}>
						<FontAwesome5
							name="search"
							size={normalize(20)}
							color="#435B71"
						/>
					</TouchableOpacity>
				</View>
			</View>
			
			{/* Body */}
			<ScrollView style={{paddingBottom: 15}} showsVerticalScrollIndicator={false}>
			<View style={{alignItems:'center'}}>
				<TouchableOpacity onPress={() => navigation.navigate('Shop')}>
					<Image style={{width:270, height:150,marginTop:20}}source={require('../assets/sayurmix.jpg')} />
				 </TouchableOpacity>
			</View>
			<View>
				<Text
					style={{
						margin: normalize(10),
						fontSize: normalize(15),
						fontWeight: 'bold',
						color: '#002140',
					}}>
					Kategori Produk
				</Text>
			</View>
			<View
				style={{
					flexDirection: 'row',
					padding: normalize(10),
					alignItems: 'center',
					justifyContent: 'space-around',
				}}>
				
				<TouchableOpacity style={styles.kategori} onPress={() => navigation.navigate('Shop', {data: "Sayuran"})}>
					<Image source={require('../assets/sayuran.png')} style={{width:normalize(30),height:normalize(30)}} />
					<Text style={styles.text}>Sayuran</Text>
				</TouchableOpacity>
				
				<TouchableOpacity style={styles.kategori} onPress={() => navigation.navigate('Shop', {data: "Buah"})}>
					<Image source={require('../assets/buah.png')} style={{width:normalize(30),height:normalize(30)}} />
					<Text style={styles.text}>Buah</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.kategori} onPress={() => navigation.navigate('Shop', {data: "PaketSayur"})}>
					<Image source={require('../assets/paketSayur.png')} style={{width:normalize(30),height:normalize(25)}} />
					<Text style={styles.text}>Paket Sayur</Text>
				</TouchableOpacity>
				
				<TouchableOpacity style={styles.kategori} onPress={() => navigation.navigate('Shop', {data: "PaketBuah"})}>
					<Image source={require('../assets/paketBuah.png')} style={{width:normalize(30),height:normalize(28)}} />
					<Text style={styles.text}>Paket Buah</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.kategori} onPress={() => navigation.navigate('Shop', {data: "PaketCampur"})}>
					<Image style={{ left: normalize(10),width:normalize(40),height:normalize(30) }} source={require('../assets/paketCampur.png')} />
					<Text style={styles.text}>Paket Campur</Text>
				</TouchableOpacity>
			</View>

			<View style={{width:300,height:120, backgroundColor:'#DCE8D6',borderRadius:10,marginTop:12,marginLeft:12}}>
				<View style={{flexDirection:'row'}}>
						<Image source={require('../assets/Contoh.png')} />
						<View style={{marginTop:30,marginLeft:20}}>
							<Text style={{fontSize:12.57,fontWeight:'bold',color:'#002140'}}>Nama Sayuran</Text>
							<Text style={{fontSize:12.57,fontWeight:'medium',color:'#002140'}}>Rp 0000/Kg</Text>
						</View>
				</View>
			</View>

			<View style={{width:300,height:120, backgroundColor:'#D6E4E8',borderRadius:10,marginTop:12,marginLeft:12}}>
				<View style={{flexDirection:'row'}}>
						<Image source={require('../assets/Contoh.png')} />
						<View style={{marginTop:30,marginLeft:20}}>
						 <Text style={{fontSize:12.57,fontWeight:'bold',color:'#002140'}}>Nama Sayuran</Text>
							<Text style={{fontSize:12.57,fontWeight:'medium',color:'#002140'}}>Rp 0000/Kg</Text>
						</View>
				</View>
			</View>
			</ScrollView>

			{/* Footer */}
			<View style={styles.footer}>
				<TouchableOpacity onPress={() => navigation.navigate('Home')}>
					<Image source={require('../assets/Home.png')} style={styles.navtab} />
				</TouchableOpacity>

				<TouchableOpacity onPress={() => navigation.navigate('History')}> 
					<Image source={require('../assets/Nota.png')} style={styles.navtab} />
				</TouchableOpacity>

				<TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
					<FontAwesome5
							style={{}}
							name="user"
							size={normalize(25)}
							color="#435B71"
						/>
				</TouchableOpacity>
			</View>
		</View>
	);
};