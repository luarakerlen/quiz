import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { ButtonContainer, ButtonsContainer, Title, Subtitle } from './styles';
import { QuestionInterface } from '../Question';
import { Alert } from 'react-native';
import { DefaultButton, DefaultContainer } from '../../components';
import { gameType } from '../../interfaces';

export function Beginning() {
	const navigation = useNavigation<any>();
	const [isClassicButtonLoading, setIsClassicButtonLoading] = useState(false);
	const [isTimedButtonLoading, setIsTimedButtonLoading] = useState(false);

	function startGame(type: gameType) {
		type === 'classic'
			? setIsClassicButtonLoading(true)
			: setIsTimedButtonLoading(true);
		axios
			.get('https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986')
			.then((response) => {
				const questions: QuestionInterface[] = response.data.results;
				if (questions.length > 0) {
					navigation.navigate('Question', {
						questions,
						questionIndex: 0,
						type,
					});
				} else {
					console.log('Array de perguntas vazia');
					Alert.alert('Erro!', 'Não foi possível iniciar o jogo.');
				}
			})
			.catch((error) => {
				console.log('Erro ao buscar perguntas: ', error);
				Alert.alert('Erro!', 'Não foi possível iniciar o jogo.');
			})
			.finally(() => {
				setIsClassicButtonLoading(false);
				setIsTimedButtonLoading(false);
			});
	}

	return (
		<DefaultContainer>
			<Title>You're ready to start?</Title>
			<Subtitle>It gonna take just a few minutes</Subtitle>
			<ButtonsContainer>
				<ButtonContainer>
					<DefaultButton
						isLoading={isClassicButtonLoading}
						onPress={() => startGame('classic')}
						text='Classic'
						icon='play-circle-outline'
					/>
				</ButtonContainer>
				{/* <ButtonContainer style={{ marginLeft: 10 }}>
					<DefaultButton
						isLoading={isTimedButtonLoading}
						onPress={() => startGame('timed')}
						text='Timed'
						icon='timer'
						outlined
					/>
				</ButtonContainer> */}
			</ButtonsContainer>
		</DefaultContainer>
	);
}
