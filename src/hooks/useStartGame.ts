import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { gameType } from '../interfaces';
import { QuestionInterface } from '../screens';
import { Alert } from 'react-native';

export function useStartGame() {
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

	return {
		startGame,
		isClassicButtonLoading,
	};
}
