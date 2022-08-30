import 'react-native-gesture-handler';
import React from 'react';

import { ActivityIndicator, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';

import {
	useFonts,
	Poppins_400Regular,
	Poppins_500Medium,
	Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';
import { AppStackRoutes } from './src/routes/app.stack.routes';

export default function App() {
	const [fontsLoaded] = useFonts({
		Poppins_400Regular,
		Poppins_500Medium,
		Poppins_700Bold,
	});

	if (!fontsLoaded) {
		return <ActivityIndicator />;
	}

	return (
		<ThemeProvider theme={theme}>
			<StatusBar barStyle='light-content' />
			<NavigationContainer>
				<AppStackRoutes />
			</NavigationContainer>
		</ThemeProvider>
	);
}
