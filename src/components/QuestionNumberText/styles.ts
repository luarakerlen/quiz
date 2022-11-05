import styled from "styled-components/native";

export const Text = styled.Text`
	font-size: 32px;
	text-align: center;
	font-family: ${({ theme }) => theme.fonts.bold};
	color: ${({ theme }) => theme.colors.text_secondary};
`;
