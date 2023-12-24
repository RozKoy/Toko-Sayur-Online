import { Image, Text, ScrollView, View, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { normalize } from './Normalize';

export default Transaction = ({ navigation }) => {
	return (
		<View style={styles.container}>
			{/* Header */}
			<View style={styles.header}>
				<View style={styles.logo}>
					<Image
						style={{ width: 35, height: 35 }}
						source={require('../assets/Logo.png')}
					/>
					<Text style={styles.title}>Toko Sayuran</Text>
				</View>
			</View>

			<Text style={{ marginLeft: 15, fontSize: 16, fontWeight: 'bold' }}>
				Informasi Produk
			</Text>

			{/* Body */}
			<ScrollView style={{ padding: 20 }} showsVerticalScrollIndicator={false}>
				<View>
					<Image
						source={require('../assets/cabaiMerah.jpg')}
						style={{
							borderRadius: 10,
							margin: 'auto',
							width: '100%',
							height: 150,
						}}
					/>
					<Text style={{ fontWeight: 'bold', marginTop: 10 }}>Cabai Merah</Text>
					<Text style={{ color: '#0D986A' }}>Rp. 3000, Rp. 6000</Text>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
							marginTop: 10,
							marginBottom: 10,
						}}>
						<Text style={{ fontWeight: 'bold' }}>Pilih Berat</Text>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								width: 150,
							}}>
							<TouchableOpacity
								style={{ backgroundColor: '#eee', padding: 10 }}>
								100gr
							</TouchableOpacity>
							<TouchableOpacity
								style={{ backgroundColor: '#eee', padding: 10 }}>
								250gr
							</TouchableOpacity>
						</View>
					</View>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							marginTop: 10,
							marginBottom: 10,
						}}>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								width: 100,
								alignItems: 'center',
							}}>
							<TouchableOpacity
								style={{ backgroundColor: '#eee', padding: 10 }}>
								-
							</TouchableOpacity>
							<Text>2</Text>
							<TouchableOpacity
								style={{ backgroundColor: '#eee', padding: 10 }}>
								+
							</TouchableOpacity>
						</View>
						<TouchableOpacity
							onPress={() => navigation.navigate('Shop')}
							style={{
								margin: 'auto',
								color: 'white',
								padding: 5,
								backgroundColor: '#0D986A',
								borderRadius: 10,
								width: 75,
								textAlign: 'center',
							}}>
							Beli
						</TouchableOpacity>
					</View>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
							marginTop: 10,
							marginBottom: 10,
						}}>
						<Text style={{ fontWeight: 'bold', fontSize: 16 }}>Total</Text>
						<Text
							style={{ color: '#0D986A', fontWeight: 'bold', fontSize: 16 }}>
							Rp. 6000
						</Text>
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
