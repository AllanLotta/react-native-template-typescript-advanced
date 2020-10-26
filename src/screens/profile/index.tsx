import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Title } from 'react-native-paper';

const Profile: React.FC = ({ navigation }) => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Title>Profile</Title>
			<TouchableOpacity onPress={() => navigation.goBack()}>
				<Text>GO back</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

export default Profile;
