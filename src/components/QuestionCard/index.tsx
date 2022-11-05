import React from 'react';
import { DifficultyBullets } from '../DifficultyBullets';
import { QuestionInterface } from '../../screens';
import { ProgressBar } from '../ProgressBar';
import { saveAnswer } from '../../helpers';
import {
	ButtonText,
	Card,
	ResponseButton,
	Title,
	CardHeader,
	Characteristics,
	Characteristic,
	CharacteristicTitle,
	CharacteristicDescription,
	CardContent,
} from './styles';
import { DefaultContainer } from '../DefaultContainer';

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

	async function handlePressAnswerButton(response: string) {
		await saveAnswer(questionPosition, questionData.correct_answer, response);
		onPress();
	}

	return (
		<DefaultContainer>
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
							<ResponseButton
								key={index}
								onPress={() => handlePressAnswerButton(response)}
							>
								<ButtonText>{decodeURIComponent(response)}</ButtonText>
							</ResponseButton>
						);
					})}
				</CardContent>
			</Card>
		</DefaultContainer>
	);
}
