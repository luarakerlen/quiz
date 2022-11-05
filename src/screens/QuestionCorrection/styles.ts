import styled from 'styled-components/native';

export const Content = styled.View`
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
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

export const StrongText = styled.Text`
	font-family: ${({ theme }) => theme.fonts.bold};
`;
