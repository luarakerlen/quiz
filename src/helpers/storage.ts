import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { dataKey } from '../utils';

export interface storedQuestionDataProps {
	questionNumber: number;
	question: string;
	correctAnswer: string;
	givenAnswer: string;
}

export async function saveAnswer({
	questionNumber,
	question,
	correctAnswer,
	givenAnswer,
}: storedQuestionDataProps) {
	const newStoredQuestionData: storedQuestionDataProps = {
		questionNumber,
		question,
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
