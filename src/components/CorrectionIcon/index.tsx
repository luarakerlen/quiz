import React from 'react';
import { Octicons } from '@expo/vector-icons';
import theme from '../../global/styles/theme';
import { Container } from './styles';

interface Props {
	isCorrect: boolean;
}

export function CorrectionIcon({ isCorrect }: Props) {
	return (
		<Container>
			{isCorrect ? (
				<Octicons name='verified' size={24} color={theme.colors.success} />
			) : (
				<Octicons name='blocked' size={24} color={theme.colors.fail} />
			)}
		</Container>
	);
}
