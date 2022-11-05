import React from 'react';
import { Octicons } from '@expo/vector-icons';
import theme from '../../global/styles/theme';
import { Container } from './styles';
import { useNavigation } from '@react-navigation/native';
import { storedQuestionDataProps } from '../../helpers';

export function CorrectionIcon({
	questionNumber,
	question,
	correctAnswer,
	givenAnswer,
}: storedQuestionDataProps) {
	const navigation = useNavigation<any>();
	const isCorrect = givenAnswer === correctAnswer;
	function goToCorrectionScreen() {
		navigation.navigate('QuestionCorrection', {
			questionNumber,
			question,
			givenAnswer,
			correctAnswer,
		});
	}

	return (
		<Container onPress={goToCorrectionScreen}>
			{isCorrect ? (
				<Octicons name='verified' size={24} color={theme.colors.success} />
			) : (
				<Octicons name='blocked' size={24} color={theme.colors.fail} />
			)}
		</Container>
	);
}
