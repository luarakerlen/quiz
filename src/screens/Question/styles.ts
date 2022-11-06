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
