import styled from "styled-components";
import media from "styled-media-query";

export const ContentWrapper = styled.div`
	background-color: ${(props) => props.theme.colors.lightGrey};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: 75vw;

	${media.lessThan("large")`
    background-color: ${(props) => props.theme.colors.lightGrey};
    height: 50vh;
    width: 100vw;
`}
`;

export const GlobalWrapper = styled.div`
	display: flex;
	flex-direction: row;
	background-color: ${(props) => props.theme.colors.lightGrey};

	${media.lessThan("large")`
	display: flex;
	flex-direction: column;
`}
`;

export const MusicbarWrapper = styled.div`
	background-color: white;
	border-radius: 80px 0px 0px 80px;
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 25vw;

	${media.lessThan("large")`
    background-color: white;
	border-radius: 80px 80px 0px 0px;
    height: 50vh;
    width: 100vw;
`}
`;

export default {
	ContentWrapper,
	GlobalWrapper,
	MusicbarWrapper,
};
