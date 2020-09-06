import React, { useState, useEffect } from "react";
import { GlobalWrapper } from "./style";

import Content from "./Content/Content";
import Musicbar from "./Musicbar/Musicbar";
import musicList from "../../models/musics";
import starboy from "../../assets/songs/starboy.mp3";

const Main = () => {
	const [musics, setMusics] = useState([]);

	useEffect(() => {
		setMusics(musicList);
	}, []);

	const [song, setSong] = useState("");

	const useAudio = (song) => {
		const [audio, setAudio] = useState(new Audio(song));

		useEffect(() => {
			setAudio(new Audio(song));
		}, [song]);

		const [playing, setPlaying] = useState(false);

		const toggle = () => setPlaying(!playing);
		useEffect(() => {
			!!playing ? audio.play() : audio.pause();
		}, [playing]);

		useEffect(() => {
			audio.addEventListener("ended", () => setPlaying(false));
			return () => {
				audio.removeEventListener("ended", () => setPlaying(false));
			};
		}, []);
		return [playing, toggle];
	};

	const [playing, toggle] = useAudio(song);
	const [playingBis, toggleBis] = useAudio(song);

	return (
		<GlobalWrapper>
			<Content playing={playing} playingBis={playingBis} />
			<Musicbar
				musics={musics}
				playing={playing}
				toggle={toggle}
				playingBis={playingBis}
				toggleBis={toggleBis}
				setSong={(song) => setSong(song)}
			/>
		</GlobalWrapper>
	);
};

export default Main;
