import React from 'react';
import { SafeAreaView } from 'react-native';
import { Title } from 'react-native-paper';

const Profile: React.FC = ({ navigation }) => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Title>Profile</Title>
		</SafeAreaView>
	);
};

export default Profile;
