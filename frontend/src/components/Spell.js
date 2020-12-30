import React from "react";
import { connect } from "react-redux";

function Spell({ spell }) {
	return (
		<>
			{spell ? (
				<div>
					<h1>{spell.name}</h1>
					<h2>Level: {spell.level}</h2>
					<h2>Components:</h2>
					{spell.components.map((comp) => {
						return <ul>{comp}</ul>;
					})}
					<h2>Range: {spell.range}</h2>
					{spell.desc.map((description) => {
						return <p>{description}</p>;
					})}
					{spell.higher_level ? (
						<React.Fragment>
							{spell.higher_level.map((desc) => {
								return <p>{desc}</p>;
							})}
						</React.Fragment>
					) : null}

					{/* MOST SPELLS DON"T HAVE HEAL_AT_SLOT_LEVEL */}
					{spell.heal_at_slot_level ? (
						<React.Fragment>
							<h2>Heal Per Level</h2>
							<table>
								<tr>
									<th>Level</th>
									<th>HP</th>
								</tr>
								{Object.keys(spell.heal_at_slot_level).map((lvl, index) => {
									return (
										<tr>
											<td>{lvl}</td>
											<td>{spell.heal_at_slot_level[lvl]}</td>
										</tr>
									);
								})}
							</table>
						</React.Fragment>
					) : null}

					{spell.material ? (
						<>
							<h2>Material:</h2>
							<p> {spell.material}</p>
						</>
					) : null}

					{/* RITUAL SOMETIMES FALSE */}
					<h2>Ritual:</h2>
					{spell.ritual ? <p>True</p> : <p>False</p>}

					<h2>Duration:</h2>
					<p>{spell.duration}</p>

					{/* CONCENTRATION SOMETIMES FALSE */}
					<h2>Concentration:</h2>
					{spell.concentration ? <p>True</p> : <p>False</p>}

					<h2>Casting Time:</h2>
					<p>{spell.casting_time}</p>

					{/* ATTACK_TYPE SOMETIMES NULL */}
					{spell.attack_type ? (
						<React.Fragment>
							<h2>Attack Type:</h2>
							<p>{spell.attack_type}</p>
						</React.Fragment>
					) : null}

					{/* DAMAGE SOMETIMES NULL */}
					{spell.damage ? (
						<React.Fragment>
							<h2>Damage Type:</h2>
							<p>{spell.damage.damage_type.name}</p>
							<table>
								<tr>
									<th>Level</th>
									<th>Damage</th>
								</tr>
								{spell.damage.damage_at_slot_level ? (
									<React.Fragment>
										{Object.keys(spell.damage.damage_at_slot_level).map(
											(lvl) => {
												return (
													<tr>
														<td>{lvl}</td>
														<td>{spell.damage.damage_at_slot_level[lvl]}</td>
													</tr>
												);
											}
										)}
									</React.Fragment>
								) : null}

								{spell.damage.damage_at_character_level ? (
									<React.Fragment>
										{Object.keys(spell.damage.damage_at_character_level).map(
											(lvl) => {
												return (
													<tr>
														<td>{lvl}</td>
														<td>
															{spell.damage.damage_at_character_level[lvl]}
														</td>
													</tr>
												);
											}
										)}
									</React.Fragment>
								) : null}
							</table>
						</React.Fragment>
					) : null}

					{/* DC SOMETIMES NULL */}
					{spell.dc ? (
						<React.Fragment>
							<h2>Difficulty Class:</h2>
							<p>{spell.dc.dc_type.name}</p>
						</React.Fragment>
					) : null}

					{/* AREA_OF_EFFECT SOMETIMES NULL */}
					{spell.area_of_effect ? (
						<React.Fragment>
							<h2>Area of Effect:</h2>
							<p>
								{spell.area_of_effect.size}ft {spell.area_of_effect.type}
							</p>
						</React.Fragment>
					) : null}

					<h2>School of Magic:</h2>
					<p>{spell.school.name}</p>

					<h2>Available to:</h2>
					{spell.classes.map((klass) => {
						return <p>{klass.name}</p>;
					})}
				</div>
			) : null}
		</>
	);
}

const mapStateToProps = ({ spells }) => {
	const spell = spells.all.find((spell) => {
		return (
			spell.index.toLowerCase() ===
			decodeURIComponent(window.location.href.split("/").slice(-1)[0])
		);
	});

	return {
		spell,
	};
};

export default connect(mapStateToProps)(Spell);
