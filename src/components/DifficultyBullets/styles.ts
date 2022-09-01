import styled from 'styled-components/native';

interface BulletProps {
	active: boolean;
}

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	flex-direction: row;
`;

export const Bullet = styled.View<BulletProps>`
	width: 8px;
	height: 8px;
	border-radius: 4px;
	margin: 0 1px;

  background-color: ${({theme, active}) => active ? theme.colors.primary : theme.colors.text_third};
`;
