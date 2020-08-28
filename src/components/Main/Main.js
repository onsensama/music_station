import React from "react";
import { GlobalWrapper } from "./style";

import Musicbar from "./Musicbar/Musicbar";
import Content from "./Content/Content";

const Main = () => {
	return (
		<GlobalWrapper>
			<Musicbar />
			<Content />
		</GlobalWrapper>
	);
};

export default Main;
