import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App: React.FC = () => (
	<SafeAreaView style={{ flex: 1 }}>
		<Text>Advanced Template React Native</Text>
		<Icon name="brain" size={30} color="blue" />
	</SafeAreaView>
);

export default App;
