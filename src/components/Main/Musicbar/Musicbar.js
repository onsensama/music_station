import React, { useState, useEffect } from "react";
import Playlist from "./Playlist/Playlist";
import { MusicbarWrapper } from "../style";
import { StyledButton } from "./style";
import musicList from "../../../models/musics";

const Musicbar = () => {
	const [musics, setMusics] = useState([]);

	useEffect(() => {
		setMusics(musicList);
	}, []);

	return (
		<MusicbarWrapper>
			<StyledButton variant='primary'>Primary</StyledButton>
			<Playlist />
		</MusicbarWrapper>
	);
};

export default Musicbar;
