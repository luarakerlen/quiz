import { storedQuestionDataProps } from '../helpers/storage';

interface QuestionCorrectionProps {
	questionNumber: number;
	correct: boolean;
}

export function useQuestionsCorrection(
	questionsData: storedQuestionDataProps[]
) {
	const MINIMUM_OF_CORRECT_ANSWERS = Math.ceil(questionsData.length/2);
	const questionsCorrection: QuestionCorrectionProps[] = [];
	let numberOfCorrectAnswers = 0;

	questionsData.forEach((questionData) => {
		const newQuestionCorrection = {
			questionNumber: questionData.questionNumber,
			correct: true,
		};
		if (questionData.givenAnswer === questionData.correctAnswer) {
			numberOfCorrectAnswers++;
			questionsCorrection.push(newQuestionCorrection);
		} else {
			newQuestionCorrection.correct = false;
			questionsCorrection.push(newQuestionCorrection);
		}
	});

	const result: 'success' | 'fail' =
		numberOfCorrectAnswers >= MINIMUM_OF_CORRECT_ANSWERS ? 'success' : 'fail';

	return {
		MINIMUM_OF_CORRECT_ANSWERS,
		numberOfCorrectAnswers,
		questionsCorrection,
		result,
	};
}
