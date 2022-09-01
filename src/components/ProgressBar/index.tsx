import React from 'react';

import { Container, Progress } from './styles';

interface Props {
	total: number;
	partial: number;
}

export function ProgressBar({ total, partial }: Props) {
	const progress = (partial / total) * 100;

	return (
		<Container>
			<Progress progress={progress} />
		</Container>
	);
}
