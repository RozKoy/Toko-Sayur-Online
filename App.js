import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LogIn from './components/LogIn/LogIn';
import Register from './components/LogIn/Register';
import ResetPassword from './components/LogIn/ResetPassword';

import Home from './components/Home';
import Shop from './components/Shop';
import DetailProduct from './components/DetailProduct';
import Transaction from './components/Transaction';
import History from './components/History';

import styles from './components/Style';

const Stack = createStackNavigator();

export default function App () {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Shop'>
				<Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false }}/>
				<Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
				<Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }}/>
				<Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
				<Stack.Screen name="Shop" component={Shop} options={{ headerShown: false }}/>
				<Stack.Screen name="DetailProduct" component={DetailProduct} options={{ headerShown: false }}/>
				<Stack.Screen name="Transaction" component={Transaction} options={{ headerShown: false }}/>
				<Stack.Screen name="History" component={History} options={{ headerShown: false }}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}