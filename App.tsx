import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
	useFonts,
	Poppins_400Regular,
	Poppins_500Medium,
	Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme';
import { ActivityIndicator, StatusBar } from 'react-native';
import { Beginning } from './src/screens';

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
				<Beginning />
		</ThemeProvider>
	);
}
