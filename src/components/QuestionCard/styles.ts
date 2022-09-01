import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	padding: 20px;
	background-color: ${({ theme }) => theme.colors.primary};
`;

export const Card = styled.View`
	width: 100%;
	height: 70%;
	padding: 0 20px;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.secondary};
	box-shadow: 1px 1px 10px;
`;

export const Title = styled.Text`
	margin-bottom: 16px;
	text-align: center;
	font-size: 24px;
	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ theme }) => theme.colors.text_secondary};
`;

export const ResponseButton = styled.TouchableOpacity`
	margin-top: 16px;
	width: 80%;
	padding: 16px 0;
	border-radius: 5px;
	background-color: ${({ theme }) => theme.colors.button};
`;

export const ButtonText = styled.Text`
	text-align: center;
	font-size: 18px;
	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ theme }) => theme.colors.text};
`;
