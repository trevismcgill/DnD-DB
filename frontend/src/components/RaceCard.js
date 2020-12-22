import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.css";

export default function RaceCard({ race }) {
	const imageURL = require(`../../public/assets/imgs/race-imgs/${race.name}.png`);
	return (
		<div>
			<Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src={imageURL.default} />
				<Card.Body>
					<Card.Title>{race.name}</Card.Title>
					<button onClick={() => window.scrollTo(0, 0)}>
						<Link to={`/races/${race.name.toLowerCase()}`}>See More</Link>
					</button>
				</Card.Body>
			</Card>
		</div>
	);
}
