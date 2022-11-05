import React from 'react';
import { Text } from './styles';

interface Props {
	text: string;
}

export function QuestionText({ text }: Props) {
	return <Text>{text}</Text>;
}
