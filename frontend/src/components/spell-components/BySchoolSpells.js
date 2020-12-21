import React from "react";
import SpellCard from "./SpellCard";

export default function BySchoolSpells({ spells }) {
	let schools = spells.map((spell) => spell.school.name);
	let uniqueSchools = [...new Set(schools)];
	console.log(uniqueSchools);
	return (
		<div>
			{uniqueSchools.map((school) => {
				return <SpellCard title={school} />;
			})}
		</div>

		// <SpellList>
		// 	spells=
		// 	{spells.filter((spell) => {
		// 		spell.school.index === FILTERPARAM;
		// 	})}
		// </SpellList>
	);
}
