import styled from "styled-components";

export const TitleApp = styled.h1`
	font-family: Leviafan-Normal;
	font-size: 4em;
	color: ${(props) => props.theme.colors.primaryBlack};
`;

export const PlatiniumTable = styled.div`
	display: flex;
	flex-direction: row;
	height: 50vh;
	width: 55vw;
`;

export default {
	TitleApp,
	PlatiniumTable,
};
