import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { Provider as PaperProvider, Appbar } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App: React.FC = () => (
	<PaperProvider>
		<SafeAreaView style={{ flex: 1 }}>
			<Appbar.Header>
				<Appbar.Content title="WMS" subtitle="GPA" />
				<Appbar.Action icon="magnify" onPress={() => {}} />
			</Appbar.Header>
		</SafeAreaView>
	</PaperProvider>
);

export default App;
