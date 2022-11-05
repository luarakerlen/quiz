import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { storedQuestionDataProps } from '../helpers';
import { dataKey } from '../utils';

export function useStoredQuestionsData() {
	const [storedQuestionsData, setStoredQuestionsData] = useState<storedQuestionDataProps[]>([]);
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
