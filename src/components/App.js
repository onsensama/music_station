import React from "react";
import Main from "./Main/Main";
import Theme from "../assets/theme/Theme";
import GlobalFonts from "../assets/fonts/fonts";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

function App() {
	return (
		<Theme>
			<DndProvider backend={HTML5Backend}>
				<GlobalFonts />
				<Main />
			</DndProvider>
		</Theme>
	);
}

export default App;
