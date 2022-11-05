import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useQuestionsCorrection, useStoredQuestionsData } from '../../hooks';
import { clearAnswers } from '../../helpers';
import { IconsContainer, Title, Subtitle, CardContent } from './styles';
import {
	CorrectionIcon,
	DefaultButton,
	DefaultCard,
	DefaultContainer,
} from '../../components';

export function End() {
	const navigation = useNavigation<any>();
	const [isLoading, setIsLoading] = useState(false);
	const { storedQuestionsData } = useStoredQuestionsData();
	const {
		MINIMUM_OF_CORRECT_ANSWERS,
		numberOfCorrectAnswers,
		// questionsCorrection,
		result,
	} = useQuestionsCorrection(storedQuestionsData);

	const subtitle = {
		success: `Congratulations!\nYou passed`,
		fail: `To pass the test, you need get at least ${MINIMUM_OF_CORRECT_ANSWERS} answers right`,
	};

	function handleTryAgain() {
		setIsLoading(true);
		clearAnswers();
		navigation.pop(2);
	}

	return (
		<DefaultContainer>
			<DefaultCard>
				<IconsContainer>
					{storedQuestionsData.map((question) => {
						return (
							<CorrectionIcon key={question.questionNumber} {...question} />
						);
					})}
				</IconsContainer>
				<CardContent>
					<Title>
						You've reached {numberOfCorrectAnswers} out of{' '}
						{storedQuestionsData.length}
					</Title>
					<Subtitle>{subtitle[result]}</Subtitle>
					<DefaultButton
						text='Try again'
						onPress={handleTryAgain}
						isLoading={isLoading}
					/>
				</CardContent>
			</DefaultCard>
		</DefaultContainer>
	);
}
