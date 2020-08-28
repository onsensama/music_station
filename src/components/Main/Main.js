import React from "react";
import { GlobalWrapper } from "./style";

import Musicbar from "./Musicbar/Musicbar";
import Content from "./Content/Content";

const Main = () => {
	return (
		<GlobalWrapper>
			<Content />
			<Musicbar />
		</GlobalWrapper>
	);
};

export default Main;
