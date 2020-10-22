import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import Dashboard from './screens/dashboard';
import { store } from './store';

const App: React.FC = () => (
	<PaperProvider>
		<Provider store={store}>
			<Dashboard />
		</Provider>
	</PaperProvider>
);

export default App;
