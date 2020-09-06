import React from "react";
import { ContentWrapper } from "./../style";
import { TitleApp, PlatiniumTable } from "./style";
import Platinium from "./Platinium/Platinium";

const Content = ({ playing, playingBis }) => {
	return (
		<ContentWrapper>
			<TitleApp>Kinoba Station</TitleApp>
			<PlatiniumTable>
				<Platinium playing={playing} />
				<Platinium playingBis={playingBis} reverse='scale(1, 1)' />
			</PlatiniumTable>
		</ContentWrapper>
	);
};

export default Content;
