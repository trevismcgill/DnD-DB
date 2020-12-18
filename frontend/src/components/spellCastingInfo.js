import React from "react";

export default function spellCastingInfo({ klass }) {
	return (
		<div>
			<h2>Spellcasting:</h2>

			<p>{klass.spellcasting.spellcasting_ability.name}</p>

			{klass.spellcasting.info.map(({ name, desc }) => {
				return (
					<React.Fragment>
						<h5>{name}:</h5>
						{desc.map((text) => (
							<p>{text}</p>
						))}
					</React.Fragment>
				);
			})}
		</div>
	);
}
