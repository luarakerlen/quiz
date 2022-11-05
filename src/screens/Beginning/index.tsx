import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Title, Subtitle } from './styles';
import { QuestionInterface } from '../Question';
import axios from 'axios';
import { Alert } from 'react-native';
import { DefaultButton, DefaultContainer } from '../../components';

export function Beginning() {
	const navigation = useNavigation<any>();
	const [isLoading, setIsLoading] = useState(false);

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
		<DefaultContainer>
			<Title>You're ready to start?</Title>
			<Subtitle>It gonna take just a few minutes</Subtitle>
			<DefaultButton isLoading={isLoading} onPress={startGame} text='Start' />
		</DefaultContainer>
	);
}
