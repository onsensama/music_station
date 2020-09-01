import awesomevolhooked from "../assets/songs/awesomevol_hooked.mp3";
import princebelair from "../assets/songs/princebelair.mp3";
import starboy from "../assets/songs/starboy.mp3";
import awesomevolhookedImg from "../assets/images/covers/awesomevol.jpg";
import princebelairImg from "../assets/images/covers/princebelair.jpg";
import starboyImg from "../assets/images/covers/starboy.jpg";

export const musicList = [
	{
		id: 1,
		title: "Hooked on a Feeling",
		artist: "Blue Swede",
		song: awesomevolhooked,
		img: awesomevolhookedImg,
		status: false,
	},
	{
		id: 2,
		title: "Fresh Prince of Bel Air",
		artist: "Will Smith",
		song: princebelair,
		img: princebelairImg,
		status: false,
	},
	{
		id: 3,
		title: "I fell it coming",
		artist: "Starboy",
		song: starboy,
		img: starboyImg,
		status: false,
	},
];

export default musicList;
