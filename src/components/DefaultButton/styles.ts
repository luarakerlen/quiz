import styled from 'styled-components/native';

interface ButtonProps {
	isLoading?: boolean;
}

export const Button = styled.TouchableOpacity<ButtonProps>`
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
