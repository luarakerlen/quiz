import React from 'react';
import { DifficultyBullets } from '../DifficultyBullets';
import { QuestionInterface } from '../../screens';

import {
	ButtonText,
	Card,
	Container,
	ResponseButton,
	Title,
	CardHeader,
	HeaderContainer,
	HeaderTitle,
	HeaderDescription,
	CardContent,
} from './styles';

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
				<CardHeader>
					<HeaderContainer>
						<HeaderTitle>Category</HeaderTitle>
						<HeaderDescription>
							{decodeURIComponent(questionData.category)}
						</HeaderDescription>
					</HeaderContainer>

					<HeaderContainer>
						<HeaderTitle>Difficulty</HeaderTitle>
						<DifficultyBullets
							difficulty={decodeURIComponent(questionData.difficulty)}
						/>
					</HeaderContainer>
				</CardHeader>

				<CardContent>
					<Title>{decodeURIComponent(questionData.question)}</Title>

					{responses.map((response, index) => {
						return (
							<ResponseButton key={index} onPress={onPress}>
								<ButtonText>{decodeURIComponent(response)}</ButtonText>
							</ResponseButton>
						);
					})}
				</CardContent>
			</Card>
		</Container>
	);
}
