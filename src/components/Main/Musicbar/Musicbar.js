import React, { useState } from "react";
import { MusicbarWrapper } from "../style";

import Playlist from "./Playlist/Playlist";
import SearchBar from "./Searchbar/Searchbar";

const Musicbar = ({
	musics,
	playing,
	toggle,
	playingBis,
	toggleBis,
	audio,
	setSong,
}) => {
	const [search, setSearch] = useState("");

	const filteredMusics = musics.filter((music) => {
		return music.title.toLowerCase().includes(search.toLowerCase());
	});

	return (
		<MusicbarWrapper className='d-flex align-items-center'>
			<SearchBar onChange={(value) => setSearch(value)} />
			<div className='mt-5 w-100'>
				{filteredMusics.map(({ artist, id, img, song, title, status }) => (
					<Playlist
						id={id}
						key={id}
						title={title}
						artist={artist}
						song={song}
						img={img}
						status={status}
						playing={playing}
						toggle={toggle}
						playingBis={playingBis}
						toggleBis={toggleBis}
						audio={audio}
						search={search}
						setSong={setSong}
					/>
				))}
			</div>
		</MusicbarWrapper>
	);
};

export default Musicbar;
