import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
	DefaultButton,
	DefaultCard,
	DefaultContainer,
	QuestionText,
	Spacing,
} from '../../components';
import { StoredQuestionDataProps } from '../../helpers';
import {
	Content,
	CorrectAnswer,
	GivenAnswer,
	StrongText,
	Title,
} from './styles';

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
					{/* <QuestionNumberText text='teste'/> */}
					<Spacing spacingVertical='8px' />
					<QuestionText text={decodeURIComponent(data.question)} />
					<Spacing spacingVertical='8px' />
					{data.givenAnswer !== data.correctAnswer && (
						<GivenAnswer>
							<StrongText>Given answer:</StrongText>{' '}
							{decodeURIComponent(data.givenAnswer)}
						</GivenAnswer>
					)}
					<CorrectAnswer>
						<StrongText>Correct answer:</StrongText>{' '}
						{decodeURIComponent(data.correctAnswer)}
					</CorrectAnswer>
					<DefaultButton text='Go Back' onPress={goBack} />
				</Content>
			</DefaultCard>
		</DefaultContainer>
	);
}
