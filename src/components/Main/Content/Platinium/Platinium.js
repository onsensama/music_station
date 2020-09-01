import React, { useContext } from "react";
import platinium from "../../../../assets/images/platinium.svg";
import arrowPlatinium from "../../../../assets/images/arrow-platinium.svg";
import { ArrowPlatinium, Platinium, PlatiniumWrapper } from "./style";

const Platine = ({ reverse = "scale(-1, 1)" }) => {
	return (
		<PlatiniumWrapper style={{ transform: reverse }}>
			<ArrowPlatinium src={arrowPlatinium} alt='arrowPlatinium' />
			<Platinium src={platinium} alt='platinium' />
		</PlatiniumWrapper>
	);
};

export default Platine;
