import styled from 'styled-components/native';

interface Props {
	spacingVertical: string;
	spacingHorizontal: string;
}

export const Container = styled.View<Props>`
	margin-top: ${({ spacingVertical }) => spacingVertical};
	margin-right: ${({ spacingHorizontal }) => spacingHorizontal};
`;
