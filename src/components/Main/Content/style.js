import styled from "styled-components";
import media from "styled-media-query";

export const TitleApp = styled.h1`
	font-family: Leviafan-Normal;
	font-size: 4em;
	color: ${(props) => props.theme.colors.primaryBlack};
	${media.lessThan("medium")`
	font-size: 2em;
`}
`;

export const PlatiniumTable = styled.div`
	display: flex;
	flex-direction: row;
	height: 50vh;
	width: 55vw;
	${media.lessThan("large")`
	height: 35vh;
	width:80%
`}
	${media.lessThan("medium")`
height: 35vh;
width:100%
`}
${media.between("small", "medium")`
width:80%
`}
`;

export default {
	TitleApp,
	PlatiniumTable,
};
