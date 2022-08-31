import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.primary};
`;

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

export const StartButton = styled.TouchableOpacity`
	background-color: ${({ theme }) => theme.colors.button};
	margin-top: 32px;
	padding: 16px 128px;
	border-radius: 5px;
`;

export const ButtonText = styled.Text`
	font-size: 18px;
	text-align: center;
	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ theme }) => theme.colors.text};
`;
