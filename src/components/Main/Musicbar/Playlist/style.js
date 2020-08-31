import styled from "styled-components";
import media from "styled-media-query";

export const Img = styled.img`
	max-width: 40px;
	border-radius: 15px;
	margin-right: 15px;
	${media.lessThan("large")`
	display: none;
`};
`;

export const Title = styled.h1`
	font-family: TRYGrtskGigaBold;
	font-size: 0.7rem;
	margin: 0px;
	color: ${(props) => props.theme.colors.primaryRed};
`;

export const Artist = styled.p`
	font-family: TRYGrtskGigaRegular;
	font-size: 0.6rem;
	margin: 0;
	color: ${(props) => props.theme.colors.primaryBlack};
`;

export const AccordionContentWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: start;
	margin-left: 2vw;
	${media.lessThan("large")`
	flex-direction: column;
	justify-content: center;
`}
`;
export const TextContent = styled.div`
	text-align: left;
	${media.lessThan("large")`
	text-align: center;
`}
`;

export default {
	Img,
	Artist,
	Title,
	AccordionContentWrapper,
	TextContent,
};
