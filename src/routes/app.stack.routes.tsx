import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
	Beginning,
	Question,
	End,
	QuestionCorrection,
	Preferences,
} from '../screens';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppStackRoutes() {
	return (
		<Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName='Beginning'
		>
			<Screen name='Beginning' component={Beginning} />
			<Screen name='Preferences' component={Preferences} />
			<Screen name='Question' component={Question} />
			<Screen name='End' component={End} />
			<Screen name='QuestionCorrection' component={QuestionCorrection} />
		</Navigator>
	);
}
