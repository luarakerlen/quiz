import styled from 'styled-components/native';

export const Text = styled.Text`
	font-size: 24px;
	text-align: center;
	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ theme }) => theme.colors.text_secondary};
`;
