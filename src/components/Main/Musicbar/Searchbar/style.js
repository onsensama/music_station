import styled from "styled-components";
import { InputGroup, FormControl } from "react-bootstrap";

export const StyledInputGroup = styled(InputGroup)`
	margin-top: 80px;
`;
export const StyledFormControl = styled(FormControl)`
	&:focus {
		outline: none;
		box-shadow: 0px 0px 2px red;
	}
`;

export default {
	StyledInputGroup,
	StyledFormControl,
};
