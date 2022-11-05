import React from 'react';
import { Container } from './styles';

interface Props {
	children: React.ReactElement | React.ReactElement[]
}

export function DefaultContainer({ children }: Props) {
	return <Container>{children}</Container>;
}
