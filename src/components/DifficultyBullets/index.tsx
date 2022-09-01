import React from 'react';

import { Bullet, Container } from './styles';

interface Props {
	difficulty: string;
}

export function DifficultyBullets({ difficulty }: Props) {
	const activeBullets: boolean[] = [
		difficulty === 'easy' || difficulty === 'medium' || difficulty === 'hard',
		difficulty === 'medium' || difficulty === 'hard',
		difficulty === 'hard',
	];
	return (
		<Container>
			{activeBullets.map((item, index) => {
				return <Bullet key={index} active={item} />;
			})}
		</Container>
	);
}
