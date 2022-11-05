import styled from 'styled-components/native';

export const Card = styled.View`
	width: 100%;
	height: 70%;
	padding: 16px 20px;
	border-radius: 8px;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.secondary};
`;

export const IconsContainer = styled.View`
	width: 100%;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
`;

export const CardContent = styled.View`
	flex: 1;
	width: 100%;
	align-items: center;
	justify-content: center;
	justify-self: center;
`;

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
