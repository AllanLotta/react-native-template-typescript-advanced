import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TabButton: React.FC = ({ color, size, icon, navigationProps }) => {
	return (
		<View
			style={{
				borderColor: 'black',
			}}
			// onPress={() => navigationProps.toggleDrawer()}
		>
			<Icon name={icon} size={size} color={color} />
		</View>
	);
};

export default TabButton;
