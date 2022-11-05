import { storedQuestionDataProps } from '../helpers/storage';

export function useQuestionsCorrection(
	questionsData: storedQuestionDataProps[]
) {
	const MINIMUM_OF_CORRECT_ANSWERS = Math.ceil(questionsData.length / 2);
	let numberOfCorrectAnswers = 0;

	questionsData.forEach((questionData) => {
		if (questionData.givenAnswer === questionData.correctAnswer) {
			numberOfCorrectAnswers++;
		}
	});

	const result: 'success' | 'fail' =
		numberOfCorrectAnswers >= MINIMUM_OF_CORRECT_ANSWERS ? 'success' : 'fail';

	return {
		MINIMUM_OF_CORRECT_ANSWERS,
		numberOfCorrectAnswers,
		result,
	};
}
