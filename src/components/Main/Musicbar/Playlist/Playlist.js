import React from "react";
import {
	Title,
	Artist,
	Img,
	AccordionContentWrapper,
	TextContent,
	Buttons,
} from "./style";
import { Card, Accordion, Button } from "react-bootstrap";

const Playlist = ({
	artist,
	id,
	img,
	title,
	playing,
	toggle,
	playingBis,
	toggleBis,
	song,
	audio,
	search,
	setSong,
}) => {
	const onClick = () => {
		setSong(song);
		toggle();
	};
	const onClickBis = () => {
		setSong(song);
		toggleBis();
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
					<Card.Body className='border-0'>
						<Buttons>
							<Button
								onClick={() => onClick()}
								className='ml-2 mr-2 bg-danger border-0'>
								{playing ? "Pause 1" : "Play 1"}
							</Button>
							<Button
								onClick={() => onClickBis()}
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
