import React from "react";
import Card from "react-bootstrap/Card";
import Link from "react-router-dom/Link";

function SpellList({ spells }) {
	return (
		<div>
			<h1>Spells</h1>
			{spells.map((spell) => (
				<ul>
					<Link to={`/spells/${spell.index.toLowerCase()}`}>{spell.name}</Link>
				</ul>
			))}
		</div>
	);
}

export default SpellList;
