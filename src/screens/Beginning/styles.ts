import styled from 'styled-components/native';

interface StartButtonProps {
	isLoading: boolean;
}

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	padding: 20px;
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

export const StartButton = styled.TouchableOpacity<StartButtonProps>`
	width: 80%;
	height: 48px;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme, isLoading }) =>
		isLoading ? theme.colors.disabled_button : theme.colors.button};
	margin-top: 32px;
	border-radius: 5px;
`;

export const ButtonText = styled.Text`
	font-size: 18px;
	text-align: center;
	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ theme }) => theme.colors.text};
`;
