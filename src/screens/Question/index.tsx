import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { DefaultContainer, QuestionCard } from '../../components';
import { TimeText, TimeContainer } from './styles';
import theme from '../../global/styles/theme';
const { Stopwatch } = require('react-native-stopwatch-timer');

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
	let currentTime: string = '00:00:00';
	const [start, setStart] = useState(false);
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
		setStart(false);
		navigation.navigate('End', { timeToComplete: currentTime });
	}

	function continueOrEnd() {
		if (hasMoreQuestions) {
			nextQuestion();
		} else {
			endGame();
		}
	}

	function saveCurrentTime(time: string) {
		currentTime = time;
	}

	useEffect(() => {
		setStart(true);
	}, []);

	return (
		<DefaultContainer>
			<TimeContainer>
				<TimeText>Time:</TimeText>
				<Stopwatch
					start={start}
					options={options}
					getTime={(time: string) => {
						saveCurrentTime(time);
					}}
				/>
			</TimeContainer>

			<QuestionCard
				questionData={questions[questionIndex]}
				totalOfQuestions={questionQuantity}
				questionPosition={questionIndex + 1}
				onPress={continueOrEnd}
			/>
		</DefaultContainer>
	);
}

const options = {
	container: {
		backgroundColor: 'none',
	},
	text: {
		fontSize: 18,
		color: theme.colors.text,
	},
};
