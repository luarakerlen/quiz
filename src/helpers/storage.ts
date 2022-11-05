import AsyncStorage from '@react-native-async-storage/async-storage';
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
