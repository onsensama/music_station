import React from "react";
import { StyledInputGroup, StyledFormControl } from "./style";

const SearchBar = ({ onChange }) => {
	return (
		<StyledInputGroup className='border w-75 pt-2 pb-2 rounded'>
			<StyledFormControl
				className='border-0 '
				placeholder='Search a music'
				aria-describedby='basic-addon2'
				onChange={(event) => onChange(event.target.value)}
			/>
		</StyledInputGroup>
	);
};

export default SearchBar;
