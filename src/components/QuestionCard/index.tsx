import React from 'react';
import { QuestionInterface } from '../../screens';

import { ButtonText, Card, Container, ResponseButton, Title } from './styles';

interface Props {
	questionData: QuestionInterface;
	onPress: () => void;
}

export function QuestionCard({ questionData, onPress }: Props) {
	let responses = [
		questionData.correct_answer,
		...questionData.incorrect_answers,
	];
	responses = responses.sort(() => Math.random() - 0.5);

	return (
		<Container>
			<Card>
				<Title>{questionData.question}</Title>

				{responses.map((response, index) => {
					return (
						<ResponseButton key={index} onPress={onPress}>
							<ButtonText>{response}</ButtonText>
						</ResponseButton>
					);
				})}
			</Card>
		</Container>
	);
}
