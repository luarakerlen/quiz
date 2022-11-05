import React from 'react';
import { Text } from './styles';

interface Props {
	text: string;
}

export function QuestionNumberText({ text }: Props) {
	return <Text>{text}</Text>;
}
