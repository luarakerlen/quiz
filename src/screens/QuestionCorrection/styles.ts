import styled from 'styled-components/native';

export const Content = styled.View`
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
`;

export const Title = styled.Text`
	font-size: 32px;
	text-align: center;
	font-family: ${({ theme }) => theme.fonts.bold};
	color: ${({ theme }) => theme.colors.text_secondary};
`;

export const Question = styled.Text`
	font-size: 24px;
	text-align: center;
	margin: 8px 0;
	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ theme }) => theme.colors.text_secondary};
`;

export const GivenAnswer = styled.Text`
	font-size: 18px;
	text-align: center;
	margin-top: 24px;
	margin-bottom: 16px;
	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ theme }) => theme.colors.fail};
`;

export const CorrectAnswer = styled.Text`
	font-size: 18px;
	text-align: center;
	margin: 16px 0;
	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ theme }) => theme.colors.success};
`;
