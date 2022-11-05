import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

interface storedQuestionDataProps {
	questionNumber: number;
	correctAnswer: string;
	givenAnswer: string;
}

const dataKey = '@quiz:questions';

export async function saveAnswer(
	questionNumber: number,
	correctAnswer: string,
	givenAnswer: string
) {
	const newStoredQuestionData: storedQuestionDataProps = {
		questionNumber,
		correctAnswer,
		givenAnswer,
	};

	try {
		const data = await AsyncStorage.getItem(dataKey);
		const currentData = data ? JSON.parse(data) : [];
		const updatedData = [...currentData, newStoredQuestionData];

		await AsyncStorage.setItem(dataKey, JSON.stringify(updatedData));
	} catch (e) {
		console.log('Erro ao salvar resposta: ', e);
		Alert.alert('Erro ao salvar!', 'Não foi possível registrar sua resposta.');
	}
}

export async function clearAnswers() {
	try {
		await AsyncStorage.clear();
	} catch (e) {
		console.log('Erro ao excluir dados: ', e);
		Alert.alert('Erro!', 'Não foi possível continuar.');
	}
}

export function useStoredQuestionsData() {
	const [storedQuestionsData, setStoredQuestionsData] = useState([]);
	async function getAnswers() {
		try {
			const data = await AsyncStorage.getItem(dataKey);
			const currentData = data ? JSON.parse(data) : [];
			setStoredQuestionsData(currentData);
		} catch (e) {
			console.log('Erro ao recuperar dados do storage: ', e);
			Alert.alert('Erro!', 'Não foi possível continuar.');
		}
	}

	useEffect(() => {
		getAnswers();
	}, []);

	return { storedQuestionsData };
}
