import React from "react";
import { GlobalWrapper } from "./style";

import Content from "./Content/Content";
import Musicbar from "./Musicbar/Musicbar";

const Main = () => {
	return (
		<GlobalWrapper>
			<Content />
			<Musicbar />
		</GlobalWrapper>
	);
};

export default Main;
