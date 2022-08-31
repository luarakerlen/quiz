import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Title, Subtitle, StartButton, ButtonText } from './styles';

export function Beginning() {
	const navigation = useNavigation<any>();

	function startGame() {
		navigation.navigate('Question');
	}

	return (
		<Container>
			<Title>You're ready to start?</Title>
			<Subtitle>It gonna take just a few minutes</Subtitle>
			<StartButton onPress={startGame}>
				<ButtonText>Start</ButtonText>
			</StartButton>
		</Container>
	);
}
