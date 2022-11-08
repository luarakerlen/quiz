import React from 'react';
import { ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { Button, ButtonContainer, ButtonText } from './styles';

interface Props {
	onPress: () => void;
	text: string;
	icon?: keyof typeof MaterialIcons.glyphMap;
	isLoading?: boolean;
	outlined?: boolean;
	width?: string;
}

export function DefaultButton({
	onPress,
	text,
	icon,
	isLoading,
	outlined = false,
	width,
}: Props) {
	const theme = useTheme();

	return (
		<Button
			disabled={isLoading}
			isLoading={isLoading}
			onPress={onPress}
			outlined={outlined}
			width={width}
		>
			{isLoading ? (
				<ActivityIndicator color={theme.colors.text} />
			) : (
				<ButtonContainer>
					<MaterialIcons name={icon} size={24} color={theme.colors.text} />
					<ButtonText outlined={outlined}>{text}</ButtonText>
				</ButtonContainer>
			)}
		</Button>
	);
}
