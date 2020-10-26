import React from 'react';
import { SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Title } from 'react-native-paper';

const Receivement: React.FC = ({ navigation }) => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Title>Receivement</Title>
			<TouchableOpacity onPress={() => navigation.goBack()}>
				<Title>Back</Title>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

export default Receivement;
