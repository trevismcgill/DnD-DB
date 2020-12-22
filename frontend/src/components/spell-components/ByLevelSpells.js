import React from "react";
import SpellCard from "./SpellCard";
import { Container, Row } from "react-bootstrap";

export default function ByLevelSpells({ spells }) {
	let levels = spells.map((spell) => spell.level.toString());
	let uniqueLevels = [...new Set(levels)];
	uniqueLevels.sort();
	return (
		<div>
			<Container>
				<Row md={4}>
					{uniqueLevels.map((level) => {
						return <SpellCard title={level} />;
					})}
				</Row>
			</Container>
		</div>
	);
}
