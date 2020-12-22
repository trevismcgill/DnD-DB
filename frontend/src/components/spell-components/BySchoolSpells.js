import React from "react";
import SpellCard from "./SpellCard";
import { Container, Row } from "react-bootstrap";

export default function BySchoolSpells({ spells }) {
	let schools = spells.map((spell) => spell.school.name);
	let uniqueSchools = [...new Set(schools)];
	uniqueSchools.sort();
	return (
		<div>
			<Container>
				<Row md={4}>
					{uniqueSchools.map((school) => {
						return <SpellCard title={school} />;
					})}
				</Row>
			</Container>
		</div>
	);
}
