import React from 'react';
import { Container } from './styles';

interface Props {
	spacingVertical?: string;
	spacingHorizontal?: string;
}

export function Spacing({
	spacingVertical = '0px',
	spacingHorizontal = '0px',
}: Props) {
	return (
		<Container
			spacingVertical={spacingVertical}
			spacingHorizontal={spacingHorizontal}
		/>
	);
}
