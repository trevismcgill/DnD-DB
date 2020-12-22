import React from "react";
import { Container, Row } from "react-bootstrap";
import Link from "react-router-dom/Link";

function SpellList({ spells }) {
	// console.log("Hello");
	return (
		<div>
			<h1>Spells</h1>
			{spells.map((spell) => (
				<Container>
					<Row>
						<Link to={`/spells/${spell.index.toLowerCase()}`}>
							{spell.name}
						</Link>
					</Row>
				</Container>
			))}
		</div>
	);
}

export default SpellList;
