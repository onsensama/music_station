import styled from "styled-components";
import media from "styled-media-query";

const widthTest = `80vh`;

export const ContentWrapper = styled.div`
	background-color: ${(props) => props.theme.colors.lightBlue};
	display: flex;
	align-item: column;
	height: 100vh;
	width: 70vw;
`;

export default {
	ContentWrapper,
};
