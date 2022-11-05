import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { DefaultButton, DefaultCard, DefaultContainer } from '../../components';
import { StoredQuestionDataProps } from '../../helpers';
import { Content, CorrectAnswer, GivenAnswer, Question, Title } from './styles';

interface Params {
	data: StoredQuestionDataProps;
}

export function QuestionCorrection() {
	const navigation = useNavigation<any>();
	const route = useRoute();
	const { data } = route.params as Params;

	function goBack() {
		navigation.goBack();
	}

	return (
		<DefaultContainer>
			<DefaultCard>
				<Content>
					<Title>Question {data.questionNumber}</Title>
					<Question>{decodeURIComponent(data.question)}</Question>
					{data.givenAnswer !== data.correctAnswer && (
						<GivenAnswer>
							Given answer: {decodeURIComponent(data.givenAnswer)}
						</GivenAnswer>
					)}
					<CorrectAnswer>
						Correct answer: {decodeURIComponent(data.correctAnswer)}
					</CorrectAnswer>
					<DefaultButton text='Go Back' onPress={goBack} />
				</Content>
			</DefaultCard>
		</DefaultContainer>
	);
}
