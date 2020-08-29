import styled, { keyframes } from "styled-components";

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
`;

export const Platinium = styled.img`
	z-index: 1;
	position: absolute;
	animation: ${rotating} 4s linear infinite;
	right: 15%;
	top: 13%;
	width: 20vw;
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
