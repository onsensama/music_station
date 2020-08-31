import React, { useState, useEffect, createContext } from "react";
import { MusicbarWrapper } from "../style";
import musicList from "../../../models/musics";

import Playlist from "./Playlist/Playlist";
import SearchBar from "./Searchbar/Searchbar";

const Musicbar = () => {
	const [musics, setMusics] = useState([]);

	useEffect(() => {
		setMusics(musicList);
	}, []);

	return (
		<MusicbarWrapper className='d-flex align-items-center'>
			<SearchBar />
			<div className='mt-5 w-100'>
				{musics.map(({ artist, id, img, song, title, status }) => (
					<Playlist
						id={id}
						key={id}
						title={title}
						artist={artist}
						song={song}
						img={img}
						status={status}
					/>
				))}
			</div>
		</MusicbarWrapper>
	);
};

export default Musicbar;
