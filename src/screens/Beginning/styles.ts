import styled from 'styled-components/native';

export const Title = styled.Text`
	font-size: 32px;
	text-align: center;
	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ theme }) => theme.colors.text};
`;

export const Subtitle = styled.Text`
	font-size: 18px;
	text-align: center;
	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ theme }) => theme.colors.text};
`;

export const ButtonsContainer = styled.View`
	width: 100%;
	flex-direction: row;
`;

export const ButtonContainer = styled.View`
	flex: 1;
`;
