import styled, { keyframes } from "styled-components";
import media from "styled-media-query";

const rotating = keyframes`
    0%{
        transform: rotate(0deg)
    }
    100%{
        transform: rotate(360deg)
    } 
`;

export const ArrowPlatinium = styled.img`
	z-index: 2;
	width: 12vw;
	${media.lessThan("large")`
	width: 15vw;
`}
	${media.lessThan("small")`
display: none
`}
`;

export const Platinium = styled.img`
	z-index: 1;
	position: absolute;
	animation: ${rotating} 4s linear infinite;
	right: 15%;
	width: 20vw;
	top: 13%;
	${media.lessThan("large")`
	top: 15%;
	width: 28vw;
	left: 10%
`}
	${media.lessThan("small")`
top: 10%;
width: 60vw;
left: 10%
`}
`;

export const PlatiniumWrapper = styled.div`
	width: 50vw;
	position: relative;
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
`;

export default {
	ArrowPlatinium,
	Platinium,
	PlatiniumWrapper,
};
