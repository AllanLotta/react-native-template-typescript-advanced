import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider as PaperProvider, Appbar } from 'react-native-paper';

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
