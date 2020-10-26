import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Dashboard from '../screens/dashboard';
import TabButton from '../components/tabButton';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const NavigationDrawerStructure = navigation => {
	// Props to open/close the drawer
	navigation.toggleDrawer();
};

function getHeaderTitle(route) {
	const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

	switch (routeName) {
		case 'Dashboard':
			return 'Home';
		case 'tab2':
			return 'Tab2';
		case 'tab3':
			return 'Tab3';
		default:
			return '';
	}
}

const MenuTabButton: React.FC = () => {
	return null;
};

const TabRoutes: React.FC = ({ navigation }) => {
	return (
		<Tab.Navigator
			initialRouteName="Dashboard"
			tabBarOptions={{
				activeTintColor: '#952872',
				inactiveTintColor: 'gray',
				style: {
					backgroundColor: '#fafafa',
					padding: 5,
					borderTopWidth: 1,
					borderTopColor: '#cecece',
				},
				labelStyle: {
					textAlign: 'center',
					fontSize: 14,
					color: '#4e4d53',
				},
			}}
		>
			<Tab.Screen
				name="Dashboard"
				component={Dashboard}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: ({ color, size }) => (
						<Icon name="home" color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name="tab2"
				component={Dashboard}
				options={{
					tabBarLabel: 'Tab2',
					tabBarIcon: ({ color, size }) => (
						<Icon name="chart-pie" color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name="tab3"
				component={Dashboard}
				options={{
					tabBarLabel: 'Tab3',
					tabBarIcon: ({ color, size }) => (
						<Icon name="chart-donut" color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name="Menu"
				component={MenuTabButton}
				listeners={{
					tabPress: e => {
						e.preventDefault();
						NavigationDrawerStructure(navigation);
					},
				}}
				options={{
					tabBarLabel: 'Menu',
					tabBarIcon: ({ color, size }) => (
						<Icon name="menu" color={color} size={size} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

const HomeScreenStack: React.FC = ({ navigation }) => {
	return (
		<Stack.Navigator initialRouteName="Dashboard">
			<Stack.Screen
				name="BottomTabStack"
				component={TabRoutes}
				options={({ route }) => ({
					headerTitle: getHeaderTitle(route),
					headerStyle: {
						backgroundColor: '#952872', // Set Header color
					},
					headerTintColor: '#fff', // Set Header text color
					headerTitleStyle: {
						fontWeight: 'bold', // Set Header text style
					},
				})}
			/>
		</Stack.Navigator>
	);
};

export default HomeScreenStack;
