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

export default History = ({ navigation }) => {
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
			
			<Text style={{marginLeft: 15, fontSize: 16, fontWeight: 'bold'}}>Riwayat Transaksi</Text>
			
			{/* Body */}
			<ScrollView style={{padding: 20}} showsVerticalScrollIndicator={false}>

				<View style={{marginTop: 10}}>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
						<Text>Pesanan :</Text>
						<Text style={{color: '#0D986A', fontWeight: 'bold'}}>01</Text>
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
						<Text>Tanggal :</Text>
						<Text>15/04/2023</Text>
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
						<Text>Status :</Text>
						<Text>Dalam Proses</Text>
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
						<Text>Total :</Text>
						<Text>Rp. 150.000</Text>
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
						<Text>Tindakan :</Text>
						<TouchableOpacity onPress={() => navigation.navigate('Transaction')} style={{color: 'white', padding: 5, backgroundColor: '#0D986A', borderRadius: 10, width: 75, textAlign: 'center'}}>Lihat</TouchableOpacity>
					</View>
				</View>

				<View style={{marginTop: 10}}>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
						<Text>Pesanan :</Text>
						<Text style={{color: '#0D986A', fontWeight: 'bold'}}>01</Text>
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
						<Text>Tanggal :</Text>
						<Text>15/04/2023</Text>
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
						<Text>Status :</Text>
						<Text>Dalam Proses</Text>
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
						<Text>Total :</Text>
						<Text>Rp. 150.000</Text>
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
						<Text>Tindakan :</Text>
						<TouchableOpacity onPress={() => navigation.navigate('Transaction')} style={{color: 'white', padding: 5, backgroundColor: '#0D986A', borderRadius: 10, width: 75, textAlign: 'center'}}>Lihat</TouchableOpacity>
					</View>
				</View>

				<View style={{marginTop: 10}}>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
						<Text>Pesanan :</Text>
						<Text style={{color: '#0D986A', fontWeight: 'bold'}}>01</Text>
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
						<Text>Tanggal :</Text>
						<Text>15/04/2023</Text>
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
						<Text>Status :</Text>
						<Text>Dalam Proses</Text>
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
						<Text>Total :</Text>
						<Text>Rp. 150.000</Text>
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
						<Text>Tindakan :</Text>
						<TouchableOpacity onPress={() => navigation.navigate('Transaction')} style={{color: 'white', padding: 5, backgroundColor: '#0D986A', borderRadius: 10, width: 75, textAlign: 'center'}}>Lihat</TouchableOpacity>
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