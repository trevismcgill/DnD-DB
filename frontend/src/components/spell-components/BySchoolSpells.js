import React from "react";
import SpellCard from "./SpellCard";

export default function BySchoolSpells({ spells }) {
	let schools = spells.filter((spell) => spell.school.index);
	let uniqueSchools = [...new Set(schools)];
	return (
		<div>
			{uniqueSchools.map((school) => {
				return <SpellCard title={school.name} />;
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
