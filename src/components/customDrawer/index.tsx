import React from 'react';
import { Text, SafeAreaView, TouchableOpacity } from 'react-native';

const CustomDrawer: React.FC = ({ navigationProps }) => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Text>Custom Drawer</Text>
			<TouchableOpacity onPress={() => navigationProps.navigate('Stack')}>
				<Text>Go To Profile</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

export default CustomDrawer;
