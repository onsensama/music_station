import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
	colors: {
		primaryBlue: "#34C8DE",
		primaryRed: "#E65C62",
		primaryYellow: "#F7C643",
		primaryBlack: "#3A4B4B",
		lightGrey: "#EFEFF6",
	},
};

const Theme = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
