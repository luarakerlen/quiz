import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
import { Button, ButtonText } from './styles';

interface Props {
	onPress: () => void;
	text: string;
	isLoading?: boolean;
}

export function DefaultButton({ onPress, text, isLoading }: Props) {
	const theme = useTheme();

	return (
		<Button disabled={isLoading} isLoading={isLoading} onPress={onPress}>
			{isLoading ? (
				<ActivityIndicator color={theme.colors.text} />
			) : (
				<ButtonText>{text}</ButtonText>
			)}
		</Button>
	);
}
