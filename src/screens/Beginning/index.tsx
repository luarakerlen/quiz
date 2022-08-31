import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Title, Subtitle, StartButton, ButtonText } from './styles';
import { QuestionInterface } from '../Question';

export function Beginning() {
	const navigation = useNavigation<any>();

	const questions: QuestionInterface[] = [
		{
			category: 'General Knowledge',
			type: 'multiple',
			difficulty: 'medium',
			question:
				'When was the Declaration of Independence approved by the Second Continental Congress?',
			correct_answer: 'July 4, 1776',
			incorrect_answers: ['May 4, 1776', 'June 4, 1776', 'July 2, 1776'],
		},
		{
			category: 'General Knowledge',
			type: 'multiple',
			difficulty: 'easy',
			question:
				'What type of animal was Harambe, who was shot after a child fell into it&#039;s enclosure at the Cincinnati Zoo?',
			correct_answer: 'Gorilla',
			incorrect_answers: ['Tiger', 'Panda', 'Crocodile'],
		},
		{
			category: 'General Knowledge',
			type: 'multiple',
			difficulty: 'hard',
			question:
				'Disney&#039;s Haunted Mansion is home to a trio of Hitchhiking Ghosts. Which of these is NOT one of them?',
			correct_answer: 'Harry',
			incorrect_answers: ['Gus', 'Phineas', 'Ezra'],
		},
	];

	function startGame() {
		navigation.navigate('Question', { questions, questionIndex: 0 });
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
