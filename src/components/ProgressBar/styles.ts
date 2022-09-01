import styled from 'styled-components/native';

interface ProgressProps {
	progress: number;
}

export const Container = styled.View`
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.text_third};
`;

export const Progress = styled.View<ProgressProps>`
	width: ${({progress}) => progress}%;
	height: 10px;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.primary};
`;