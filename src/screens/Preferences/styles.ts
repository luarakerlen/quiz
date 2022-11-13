import DropDownPicker from 'react-native-dropdown-picker';
import styled from 'styled-components/native';

interface Props {
	active?: boolean;
}

export const NumberOfQuestionsInput = styled.TextInput<Props>`
	width: 100%;
	padding: 16px 18px;
	font-size: 18px;
	font-family: ${({ theme }) => theme.fonts.regular};
	background-color: ${({ theme }) => theme.colors.text};
	color: ${({ theme }) => theme.colors.text_secondary};
	border-radius: 5px;
	margin-bottom: 8px;
	border-width: 2px;
	border-color: ${({ theme, active }) =>
		active ? theme.colors.button : theme.colors.text_secondary};
`;

export const DropDownPickerCustom = styled(DropDownPicker)<Props>`
	width: 100%;
	padding: 16px 18px;
	font-size: 18px;
	font-family: ${({ theme }) => theme.fonts.regular};
	background-color: ${({ theme }) => theme.colors.text};
	color: ${({ theme }) => theme.colors.text_secondary};
	border-radius: 5px;
	margin-bottom: 8px;
	border-width: 2px;
	border-color: ${({ theme, active }) =>
		active ? theme.colors.button : theme.colors.text_secondary};
`;

