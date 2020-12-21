import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SpellCard({ title }) {
	console.log(title);
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src="holder.js/100px180" />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Button variant="primary">Go somewhere</Button>
			</Card.Body>
		</Card>
	);
}
