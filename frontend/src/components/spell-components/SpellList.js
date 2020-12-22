import React from "react";
import { Container, Row } from "react-bootstrap";
import Link from "react-router-dom/Link";

function SpellList({ spells }) {
	// console.log("Hello");
	return (
		<div>
			{spells.map((spell) => (
				<Container>
					<Row>
						<Link
							onClick={() => window.scrollTo(0, 0)}
							to={`/spells/${spell.index.toLowerCase()}`}
						>
							{spell.name}
						</Link>
					</Row>
				</Container>
			))}
		</div>
	);
}

export default SpellList;
