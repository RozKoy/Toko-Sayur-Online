import {
	Image,
	Text,
	ScrollView,
	View,
	TouchableOpacity,
} from 'react-native';
import {
	FontAwesome5,
} from '@expo/vector-icons';

import { normalize } from './Normalize';

export default Transaction = ({ navigation }) => {
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
			</View>
			
			<Text style={{marginLeft: 15, fontSize: 16, fontWeight: 'bold'}}>Keranjang</Text>
			
			{/* Body */}
			<ScrollView style={{padding: 20}} showsVerticalScrollIndicator={false}>
			
				<View style={{marginTop: 10}}>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
						<Text>Produk :</Text>
						<Text style={{color: '#0D986A', fontWeight: 'bold'}}>Cabai Merah</Text>
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
						<Text>Harga :</Text>
						<Text>Rp. 3000</Text>
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
						<Text>Jumlah :</Text>
						<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 80}}>
							<TouchableOpacity style={{backgroundColor: '#eee', padding: 5, }}>-</TouchableOpacity>
							<Text style={{color: '#0D986A'}}>2</Text>
							<TouchableOpacity style={{backgroundColor: '#eee', padding: 5, }}>+</TouchableOpacity>
						</View>
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
						<Text>Subtotal :</Text>
						<Text>Rp. 6000</Text>
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
						<Text></Text>
						<TouchableOpacity style={{color: 'white', padding: 5, backgroundColor: 'red', borderRadius: 5, width: 75, textAlign: 'center'}}>Hapus</TouchableOpacity>
					</View>
				</View>

				<View style={{marginTop: 10}}>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
						<Text>Produk :</Text>
						<Text style={{color: '#0D986A', fontWeight: 'bold'}}>Cabai Merah</Text>
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
						<Text>Harga :</Text>
						<Text>Rp. 3000</Text>
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
						<Text>Jumlah :</Text>
						<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 80}}>
							<TouchableOpacity style={{backgroundColor: '#eee', padding: 5, }}>-</TouchableOpacity>
							<Text style={{color: '#0D986A'}}>2</Text>
							<TouchableOpacity style={{backgroundColor: '#eee', padding: 5, }}>+</TouchableOpacity>
						</View>
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
						<Text>Subtotal :</Text>
						<Text>Rp. 6000</Text>
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
						<Text></Text>
						<TouchableOpacity style={{color: 'white', padding: 5, backgroundColor: 'red', borderRadius: 5, width: 75, textAlign: 'center'}}>Hapus</TouchableOpacity>
					</View>
				</View>

				<View style={{marginTop: 10}}>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
						<Text>Produk :</Text>
						<Text style={{color: '#0D986A', fontWeight: 'bold'}}>Cabai Merah</Text>
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
						<Text>Harga :</Text>
						<Text>Rp. 3000</Text>
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
						<Text>Jumlah :</Text>
						<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 80}}>
							<TouchableOpacity style={{backgroundColor: '#eee', padding: 5, }}>-</TouchableOpacity>
							<Text style={{color: '#0D986A'}}>2</Text>
							<TouchableOpacity style={{backgroundColor: '#eee', padding: 5, }}>+</TouchableOpacity>
						</View>
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
						<Text>Subtotal :</Text>
						<Text>Rp. 6000</Text>
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
						<Text></Text>
						<TouchableOpacity style={{color: 'white', padding: 5, backgroundColor: 'red', borderRadius: 5, width: 75, textAlign: 'center'}}>Hapus</TouchableOpacity>
					</View>
				</View>

				<View style={{marginTop: 10}}>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
						<Text>Produk :</Text>
						<Text style={{color: '#0D986A', fontWeight: 'bold'}}>Cabai Merah</Text>
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
						<Text>Harga :</Text>
						<Text>Rp. 3000</Text>
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
						<Text>Jumlah :</Text>
						<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 80}}>
							<TouchableOpacity style={{backgroundColor: '#eee', padding: 5, }}>-</TouchableOpacity>
							<Text style={{color: '#0D986A'}}>2</Text>
							<TouchableOpacity style={{backgroundColor: '#eee', padding: 5, }}>+</TouchableOpacity>
						</View>
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
						<Text>Subtotal :</Text>
						<Text>Rp. 6000</Text>
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
						<Text></Text>
						<TouchableOpacity style={{color: 'white', padding: 5, backgroundColor: 'red', borderRadius: 5, width: 75, textAlign: 'center'}}>Hapus</TouchableOpacity>
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
							style={{ paddingRight: 12 }}
							name="user"
							size={normalize(25)}
							color="#435B71"
						/>
				</TouchableOpacity>
			</View>
		</View>
	);
};