import React from "react";
import platinium from "../../../../assets/images/platinium.svg";
import arrowPlatinium from "../../../../assets/images/arrow-platinium.svg";
import { ArrowPlatinium, Platinium, PlatiniumWrapper } from "./style";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../../../utils/items";
import { useContext } from "react";
import { MusicContext } from "../../Musicbar/Playlist/Playlist";

const Platine = ({ reverse = "scale(-1, 1)" }) => {
	return (
		<PlatiniumWrapper style={{ transform: reverse }}>
			<ArrowPlatinium src={arrowPlatinium} alt='arrowPlatinium' />
			<Platinium src={platinium} alt='platinium' />
		</PlatiniumWrapper>
	);
};

export default Platine;
