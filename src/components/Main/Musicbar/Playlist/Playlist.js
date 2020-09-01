import React, { useState, useEffect } from "react";
import {
	Title,
	Artist,
	Img,
	AccordionContentWrapper,
	TextContent,
	Buttons,
} from "./style";
import { Card, Accordion, Button } from "react-bootstrap";

const useAudio = (song) => {
	const [audio] = useState(new Audio(song));
	const [playing, setPlaying] = useState(false);

	const toggle = () => setPlaying(!playing);

	useEffect(() => {
		playing ? audio.play() : audio.pause();
	}, [playing]);

	useEffect(() => {
		audio.addEventListener("ended", () => setPlaying(false));
		return () => {
			audio.removeEventListener("ended", () => setPlaying(false));
		};
	}, []);

	return [playing, toggle];
};

const Playlist = ({ artist, id, img, song, title, status }) => {
	const [playing, toggle] = useAudio(song);
	const [playingBis, toggleBis] = useAudio(song);

	return (
		<Accordion key={id}>
			<Card className='border-0 '>
				<Card.Header className='bg-transparent border-0 pb-0'>
					<Accordion.Toggle
						as={Button}
						variant='link'
						eventKey={id}
						className=' pt-4 border-top w-100'>
						<AccordionContentWrapper>
							<Img src={img} alt={img}></Img>
							<TextContent className='d-flex flex-column justify-content-start'>
								<Title>{title}</Title>
								<Artist>{artist}</Artist>
							</TextContent>
						</AccordionContentWrapper>
					</Accordion.Toggle>
				</Card.Header>
				<Accordion.Collapse eventKey={id} className='border-0'>
					<Card.Body className='border-0'>
						<Buttons>
							<Button onClick={toggle} className='ml-2 mr-2 bg-danger border-0'>
								{playing ? "Pause 1" : "Play 1"}
							</Button>
							<Button
								onClick={toggleBis}
								className='ml-2 mr-2 bg-danger border-0'>
								{playingBis ? "Pause 2" : "Play 2"}
							</Button>
						</Buttons>
					</Card.Body>
				</Accordion.Collapse>
			</Card>
		</Accordion>
	);
};

export default Playlist;
