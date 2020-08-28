import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
	colors: {
		primaryBlue: "#34C8DE",
		primaryRed: "#E65C62",
		primaryYellow: "#F7C643",
		lightGrey: "#F2F2FF",
	},
	fonts: ["TRY Grtsk Giga", "Leviafan"],
	fontSizes: {
		small: "1em",
		medium: "2em",
		large: "3em",
	},
};

const Theme = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
