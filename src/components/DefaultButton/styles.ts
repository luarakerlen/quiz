import styled, { css } from 'styled-components/native';

interface ButtonProps {
	isLoading?: boolean;
	width?: string;
	outlined: boolean;
}

export const Button = styled.TouchableOpacity<ButtonProps>`
	width: ${({width}) => width ? width : '100%'};
	height: 48px;
	align-items: center;
	justify-content: center;
	margin-top: 32px;
	border-radius: 5px;
	background-color: ${({ theme, isLoading, outlined }) =>
		isLoading || outlined ? 'transparent' : theme.colors.button};
	${({ outlined, isLoading }) =>
		outlined &&
		!isLoading &&
		css`
			border-width: 3px;
			border-color: ${({ theme }) => theme.colors.text};
		`}
`;

export const ButtonContainer = styled.View`
	flex-direction: row;
`;

export const ButtonText = styled.Text<ButtonProps>`
	font-size: 18px;
	text-align: center;
	margin-left: 5px;
	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ theme }) => theme.colors.text};
`;
