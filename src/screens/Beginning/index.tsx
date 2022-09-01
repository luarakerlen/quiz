import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Title, Subtitle, StartButton, ButtonText } from './styles';
import { QuestionInterface } from '../Question';
import axios from 'axios';
import { ActivityIndicator, Alert } from 'react-native';
import { useTheme } from 'styled-components';

export function Beginning() {
	const navigation = useNavigation<any>();
	const [isLoading, setIsLoading] = useState(false);
	const theme = useTheme();

	function startGame() {
		setIsLoading(true);
		axios
			.get('https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986')
			.then((response) => {
				const questions: QuestionInterface[] = response.data.results;
				if (questions.length > 0) {
					navigation.navigate('Question', { questions, questionIndex: 0 });
				} else {
					console.log('Array de perguntas vazia');
					Alert.alert('Erro!', 'Não foi possível iniciar o jogo.');
				}
			})
			.catch((error) => {
				setIsLoading(false);
				console.log('Erro ao buscar perguntas: ', error);
				Alert.alert('Erro!', 'Não foi possível iniciar o jogo.');
			});
	}

	return (
		<Container>
			<Title>You're ready to start?</Title>
			<Subtitle>It gonna take just a few minutes</Subtitle>
			<StartButton
				disabled={isLoading}
				isLoading={isLoading}
				onPress={startGame}
			>
				{isLoading ? (
					<ActivityIndicator color={theme.colors.text} />
				) : (
					<ButtonText>Start</ButtonText>
				)}
			</StartButton>
		</Container>
	);
}
