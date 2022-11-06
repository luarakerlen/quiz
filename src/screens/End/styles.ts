import styled from 'styled-components/native';

export const TimeContainer = styled.View`
	width: 100%;
	margin-bottom: 8px;
	flex-direction: row;
	align-items: center;
`;

export const TimeText = styled.Text`
	font-size: 18px;
	margin-right: 8px;
	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ theme }) => theme.colors.text};
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
