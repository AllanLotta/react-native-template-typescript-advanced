import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './store';
import Routes from './routes';

const App: React.FC = () => (
	<PaperProvider>
		<Provider store={store}>
			<NavigationContainer>
				<Routes />
			</NavigationContainer>
		</Provider>
	</PaperProvider>
);

export default App;
