import React from "react";
import SpellCard from "./SpellCard";
import { Container, Row } from "react-bootstrap";

export default function ByKlassSpells({ spells }) {
	let klasses = spells.map((spell) => spell.classes[0].name);
	let uniqueKlasses = [...new Set(klasses)];
	uniqueKlasses.sort();
	return (
		<div>
			<Container>
				<Row md={4}>
					{uniqueKlasses.map((level) => {
						return <SpellCard title={level} />;
					})}
				</Row>
			</Container>
		</div>
	);
}
