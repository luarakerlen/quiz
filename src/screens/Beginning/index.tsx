import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Text } from 'react-native';
import { Container } from './styles';

export function Beginning() {
	const navigation = useNavigation<any>();

	function startGame() {
		navigation.navigate('Question')
	}

	return (
		<Container>
			<Text>Início</Text>
			<Button title='Start' onPress={startGame} />
		</Container>
	);
}
