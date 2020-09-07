import React from "react";
import { ContentWrapper } from "./../style";
import { TitleApp, PlatiniumTable } from "./style";
import Platinium from "./Platinium/Platinium";

const Content = ({ playing, playingBis, toggle, toggleBis }) => {
	return (
		<ContentWrapper>
			<TitleApp>Kinoba Station</TitleApp>
			<PlatiniumTable>
				<Platinium playing={playing} toggle={toggle} />
				<Platinium
					playingBis={playingBis}
					reverse='scale(1, 1)'
					toggle={toggleBis}
				/>
			</PlatiniumTable>
		</ContentWrapper>
	);
};

export default Content;
