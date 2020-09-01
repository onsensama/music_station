import React from "react";
import { ContentWrapper } from "./../style";
import { TitleApp, PlatiniumTable } from "./style";
import Platinium from "./Platinium/Platinium";

const Content = () => {
	return (
		<ContentWrapper>
			<TitleApp>Kinoba Station</TitleApp>
			<PlatiniumTable>
				<Platinium />
				<Platinium reverse='scale(1, 1)' />
			</PlatiniumTable>
		</ContentWrapper>
	);
};

export default Content;
