import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { DefaultButton, DefaultContainer } from '../../components';
import { DropDownPickerCustom, NumberOfQuestionsInput } from './styles';

export function Preferences() {
	const [numberOfQuestions, setNumberOfQuestions] = React.useState('10');
	const [openCategory, setOpenCategory] = useState(false);
	const [valueCategory, setValueCategory] = useState('any-category');
	const [itemsCategory, setItemsCategory] = useState([
		{ label: 'Any Category', value: 'any-category' },
		{ label: 'General Knowledge', value: '9' },
		{ label: 'Entertainment: Books', value: '10' },
		{ label: 'Entertainment: Film', value: '11' },
		{ label: 'Entertainment: Music', value: '12' },
		{ label: 'Entertainment: Musicals & Theatres', value: '13' },
		{ label: 'Entertainment: Television', value: '14' },
		{ label: 'Entertainment: Video Games', value: '15' },
		{ label: 'Entertainment: Board Games', value: '16' },
		{ label: 'Science & Nature', value: '17' },
		{ label: 'Science: Computers', value: '18' },
		{ label: 'Science: Mathematics', value: '19' },
		{ label: 'Mythology', value: '20' },
		{ label: 'Sports', value: '21' },
		{ label: 'Geography', value: '22' },
		{ label: 'History', value: '23' },
		{ label: 'Politics', value: '24' },
		{ label: 'Art', value: '25' },
		{ label: 'Celebrities', value: '26' },
		{ label: 'Animals', value: '27' },
		{ label: 'Vehicles', value: '28' },
		{ label: 'Entertainment: Comics', value: '29' },
		{ label: 'Science: Gadgets', value: '30' },
		{ label: 'Entertainment: Japanese Anime & Manga', value: '31' },
		{ label: 'Entertainment: Cartoon & Animations', value: '32' },
	]);
	const [openDifficulty, setOpenDifficulty] = useState(false);
	const [valueDifficulty, setValueDifficulty] = useState('any-difficulty');
	const [itemsDifficulty, setItemsDifficulty] = useState([
		{ label: 'Any Difficulty', value: 'any-difficulty' },
		{ label: 'Easy', value: 'easy' },
		{ label: 'Medium', value: 'medium' },
		{ label: 'Hard', value: 'hard' },
	]);

	return (
		<DefaultContainer>
			<NumberOfQuestionsInput
				onChangeText={setNumberOfQuestions}
				value={numberOfQuestions}
				keyboardType='numeric'
			/>
			<DropDownPickerCustom
				open={openCategory}
				value={valueCategory}
				items={itemsCategory}
				setOpen={setOpenCategory}
				setValue={setValueCategory}
				setItems={setItemsCategory}
				dropDownDirection='TOP'
			/>
			<DropDownPickerCustom
				open={openDifficulty}
				value={valueDifficulty}
				items={itemsDifficulty}
				setOpen={setOpenDifficulty}
				setValue={setValueDifficulty}
				setItems={setItemsDifficulty}
			/>
			<DefaultButton text='Start' onPress={() => {}} />
		</DefaultContainer>
	);
}
