import styled from 'styled-components/native';

export const Card = styled.View`
	width: 100%;
	height: 70%;
	padding: 16px 20px;
	border-radius: 8px;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.secondary};
`;
