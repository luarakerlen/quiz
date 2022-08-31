import React from 'react';
import { FlatList } from 'react-native';

import { Container, Title, ResponseButton, ButtonText, Card } from './styles';

export function Question() {
	const question = {
		category: 'General Knowledge',
		type: 'multiple',
		difficulty: 'medium',
		question:
			'When was the Declaration of Independence approved by the Second Continental Congress?',
		correct_answer: 'July 4, 1776',
		incorrect_answers: ['May 4, 1776', 'June 4, 1776', 'July 2, 1776'],
	};

	let responses = [question.correct_answer, ...question.incorrect_answers];
	responses = responses.sort(() => Math.random() - 0.5);

	return (
		<Container>
			<Card>
				<Title>{question.question}</Title>

				<ResponseButton>
					<ButtonText>{responses[0]}</ButtonText>
				</ResponseButton>

				<ResponseButton>
					<ButtonText>{responses[1]}</ButtonText>
				</ResponseButton>

				<ResponseButton>
					<ButtonText>{responses[2]}</ButtonText>
				</ResponseButton>

				<ResponseButton>
					<ButtonText>{responses[3]}</ButtonText>
				</ResponseButton>
			</Card>
		</Container>
	);
}
