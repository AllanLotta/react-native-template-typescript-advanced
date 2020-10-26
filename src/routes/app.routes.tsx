import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TabsStack from './tab.routes';
import CustomDrawer from '../components/customDrawer';
import Receivement from '../screens/receivement';
import Profile from '../screens/profile';
import Faq from '../screens/faq';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

const StackRoutes: React.FC = () => (
	<Stack.Navigator>
		<Stack.Screen name="Profile" component={Profile} />
		<Stack.Screen name="Faq" component={Faq} />
	</Stack.Navigator>
);

const AppRoutes: React.FC = () => {
	return (
		<NavigationContainer>
			<Drawer.Navigator
				drawerContentOptions={{
					activeTintColor: '#e91e63',
					itemStyle: { marginVertical: 5 },
				}}
				drawerContent={({ navigation }) => (
					<CustomDrawer navigationProps={navigation} />
				)}
			>
				<Drawer.Screen
					name="Dashboard"
					options={{ drawerLabel: 'Home Screen Option' }}
					component={TabsStack}
				/>
				<Drawer.Screen
					name="Stack"
					options={{ drawerLabel: 'Receivement' }}
					component={StackRoutes}
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
};
export default AppRoutes;
