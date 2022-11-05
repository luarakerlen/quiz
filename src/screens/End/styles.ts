import styled from 'styled-components/native';

export const Card = styled.View`
	width: 100%;
	min-height: 70%;
	padding: 16px 20px;
	border-radius: 8px;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.secondary};
`;

export const IconsContainer = styled.View``;

export const Title = styled.Text`
	font-size: 32px;
	text-align: center;
	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ theme }) => theme.colors.text_secondary};
`;

export const Subtitle = styled.Text`
	font-size: 18px;
	text-align: center;
	margin: 16px 0;
	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ theme }) => theme.colors.text_third};
`;
