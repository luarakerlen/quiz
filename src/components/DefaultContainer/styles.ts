import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	padding: 20px;
	background-color: ${({ theme }) => theme.colors.primary};
`;
