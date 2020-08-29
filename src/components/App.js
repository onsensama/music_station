import React from "react";
import Main from "./Main/Main";
import Theme from "../assets/theme/Theme";
import GlobalFonts from "../assets/fonts/fonts";

function App() {
	return (
		<Theme>
			<GlobalFonts />
			<Main />
		</Theme>
	);
}

export default App;
