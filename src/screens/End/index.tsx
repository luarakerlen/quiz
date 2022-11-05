import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { DefaultButton, DefaultContainer } from '../../components';
import { clearAnswers } from '../../helpers';
import { useStoredQuestionsData } from '../../hooks';
import { Card, IconsContainer, Title, Subtitle } from './styles';

export function End() {
	const { storedQuestionsData } = useStoredQuestionsData();
	const navigation = useNavigation<any>();
	// console.log('respostas: ', storedQuestionsData);
	// console.log('respostas: ', storedQuestionsData.length);

	const subtitle = {
		success: `Congratulations!\nYou passed`,
		fail: 'To pass the test, you need get at least 7 answers right',
	};

	function handleTryAgain() {
		clearAnswers();
		navigation.pop(2);
	}

	return (
		<DefaultContainer>
			<Card>
				<IconsContainer></IconsContainer>
				<Title>You've reached 6 out of 10</Title>
				<Subtitle>{subtitle.success}</Subtitle>
				<DefaultButton text='Try again' onPress={handleTryAgain} />
			</Card>
		</DefaultContainer>
	);
}
