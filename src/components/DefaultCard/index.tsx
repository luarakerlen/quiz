import React from 'react';
import { Card } from './styles';

interface Props {
	children: React.ReactElement | React.ReactElement[]
}

export function DefaultCard({ children }: Props) {
	return <Card>{children}</Card>;
}
