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
	Characteristics,
	Characteristic,
	CharacteristicTitle,
	CharacteristicDescription,
	CardContent,
} from './styles';
import { ProgressBar } from '../ProgressBar';

interface Props {
	questionData: QuestionInterface;
	totalOfQuestions: number;
	questionPosition: number;
	onPress: () => void;
}

export function QuestionCard({
	questionData,
	totalOfQuestions,
	questionPosition,
	onPress,
}: Props) {
	let responses = [
		questionData.correct_answer,
		...questionData.incorrect_answers,
	];
	responses = responses.sort(() => Math.random() - 0.5);

	return (
		<Container>
			<Card>
				<CardHeader>
					<ProgressBar total={totalOfQuestions} partial={questionPosition} />
					<Characteristics>
						<Characteristic>
							<CharacteristicTitle>Category</CharacteristicTitle>
							<CharacteristicDescription>
								{decodeURIComponent(questionData.category)}
							</CharacteristicDescription>
						</Characteristic>

						<Characteristic>
							<CharacteristicTitle>Difficulty</CharacteristicTitle>
							<DifficultyBullets
								difficulty={decodeURIComponent(questionData.difficulty)}
							/>
						</Characteristic>
					</Characteristics>
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
