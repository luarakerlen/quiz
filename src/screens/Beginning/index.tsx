import React from 'react';
import { ButtonContainer, ButtonsContainer, Title, Subtitle } from './styles';
import { DefaultButton, DefaultContainer } from '../../components';
import { useStartGame } from '../../hooks/useStartGame';

export function Beginning() {
	const { isClassicButtonLoading, startGame } = useStartGame();

	return (
		<DefaultContainer>
			<Title>You're ready to start?</Title>
			<Subtitle>It gonna take just a few minutes</Subtitle>
			<ButtonsContainer>
				<ButtonContainer>
					<DefaultButton
						isLoading={isClassicButtonLoading}
						onPress={() => startGame('classic')}
						text='Classic'
						icon='play-circle-outline'
					/>
				</ButtonContainer>
				{/* <ButtonContainer style={{ marginLeft: 10 }}>
					<DefaultButton
						isLoading={isTimedButtonLoading}
						onPress={() => startGame('timed')}
						text='Timed'
						icon='timer'
						outlined
					/>
				</ButtonContainer> */}
			</ButtonsContainer>
		</DefaultContainer>
	);
}
