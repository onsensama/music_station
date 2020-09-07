import React from "react";
import platinium from "../../../../assets/images/platinium.svg";
import arrowPlatinium from "../../../../assets/images/arrow-platinium.svg";
import { ArrowPlatinium, Platinium, PlatiniumWrapper } from "./style";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../../../utils/items";

const Platine = ({ toggle, playingBis, playing, reverse = "scale(-1, 1)" }) => {
	const [{ isOver }, drop] = useDrop({
		accept: ItemTypes.CARD,

		drop() {
			toggle();
		},
	});

	return (
		<PlatiniumWrapper style={{ transform: reverse }}>
			<ArrowPlatinium src={arrowPlatinium} alt='arrowPlatinium' />
			<Platinium
				style={{
					opacity: isOver ? "0.5" : "1",
				}}
				ref={drop}
				src={platinium}
				alt='platinium'
				playingBis={playingBis}
				playing={playing}
			/>
		</PlatiniumWrapper>
	);
};

export default Platine;
