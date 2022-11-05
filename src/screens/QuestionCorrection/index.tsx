import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { DefaultButton, DefaultCard, DefaultContainer } from '../../components';
import { StoredQuestionDataProps } from '../../helpers';

interface Params {
	data: StoredQuestionDataProps;
}

export function QuestionCorrection() {
	const navigation = useNavigation<any>();
	const route = useRoute();
	const { data } = route.params as Params;

	function goBack() {
		navigation.goBack();
	}

	return (
		<DefaultContainer>
			<DefaultCard>
				<DefaultButton text='Go Back' onPress={goBack} />
			</DefaultCard>
		</DefaultContainer>
	);
}
