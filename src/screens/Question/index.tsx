import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Container, Title, ResponseButton, ButtonText, Card } from './styles';
import { QuestionCard } from '../../components';
import { Button } from 'react-native';

export interface QuestionInterface {
	category: string;
	type: string;
	difficulty: string;
	question: string;
	correct_answer: string;
	incorrect_answers: string[];
}

interface Params {
	questions: QuestionInterface[];
	questionIndex: number;
}

export function Question() {
	const navigation = useNavigation<any>();
	const route = useRoute();
	const { questions, questionIndex } = route.params as Params;

	const questionQuantity = questions.length;
	const hasMoreQuestions = questionIndex < questionQuantity - 1;

	function nextQuestion() {
		const nextQuestionIndex = questionIndex + 1;
		navigation.navigate('Question', {
			questions,
			questionIndex: nextQuestionIndex,
		});
	}

	function endGame() {
		navigation.navigate('End');
	}

	function continueOrEnd() {
		if (hasMoreQuestions) {
			nextQuestion();
		} else {
			endGame();
		}
	}

	return (
		<QuestionCard
			questionData={questions[questionIndex]}
			totalOfQuestions={questionQuantity}
			questionPosition={questionIndex+1}
			onPress={continueOrEnd}
		/>
	);
}
