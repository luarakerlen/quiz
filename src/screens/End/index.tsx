import React from 'react';
import { DefaultButton, DefaultContainer } from '../../components';

import { Card, IconsContainer, Title, Subtitle } from './styles';

export function End() {
	const subtitle = {
		success: `Congratulations!\nYou passed`,
		fail: 'To pass the test, you need get at least 7 answers right',
	};

	return (
		<DefaultContainer>
			<Card>
				<IconsContainer></IconsContainer>
				<Title>You've reached 6 out of 10</Title>
				<Subtitle>{subtitle.success}</Subtitle>
				<DefaultButton text='Try again' onPress={() => {}} />
			</Card>
		</DefaultContainer>
	);
}
