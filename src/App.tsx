import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { store } from './store';
import Routes from './routes';

const App: React.FC = () => (
	<PaperProvider>
		<Provider store={store}>
			<Routes />
		</Provider>
	</PaperProvider>
);

export default App;
