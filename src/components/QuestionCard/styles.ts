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
	min-height: 70%;
	padding: 16px 20px;
	border-radius: 8px;
	background-color: ${({ theme }) => theme.colors.secondary};
	/* box-shadow: 1px 1px 10px; */
`;

export const CardHeader = styled.View`
	width: 100%;
	margin-bottom: 16px;
`;

export const Characteristics = styled.View`
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 16px;
`;

export const Characteristic = styled.View``;

export const CharacteristicTitle = styled.Text`
	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ theme }) => theme.colors.text_third};
`;

export const CharacteristicDescription = styled.Text`
	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ theme }) => theme.colors.primary};
`;

export const CardContent = styled.View`
	flex-grow: 1;
	width: 100%;
	align-items: center;
	justify-content: center;
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
	padding: 16px 8px;
	border-radius: 5px;
	background-color: ${({ theme }) => theme.colors.button};
`;

export const ButtonText = styled.Text`
	text-align: center;
	font-size: 18px;
	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ theme }) => theme.colors.text};
`;
