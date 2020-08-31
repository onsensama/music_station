import React, { Fragment, useState } from "react";
import useSound from "use-sound";
import {
	Title,
	Artist,
	Img,
	AccordionContentWrapper,
	TextContent,
} from "./style";
import { Card, Accordion, Button } from "react-bootstrap";

const Playlist = ({ artist, id, img, song, title, status }) => {
	const PlayMusic = () => {
		const [playOn] = useSound(song, { volume: 0.5 });
		return playOn;
	};

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
					<Card.Body className='d-flex align-items-center border-0'>
						<Button
							onClick={PlayMusic()}
							className='ml-2 mr-2 bg-danger border-0'>
							Platine 1
						</Button>
						<Button
							onClick={PlayMusic()}
							className='ml-2 mr-2 bg-danger border-0'>
							Platine 2
						</Button>
					</Card.Body>
				</Accordion.Collapse>
			</Card>
		</Accordion>
	);
};

export default Playlist;
