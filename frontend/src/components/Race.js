import React from "react";
import { connect } from "react-redux";

function Race({ race }) {
	return (
		<div>
			<h1>{race.name}</h1>
			<h2>Size: {race.size}</h2>

			<h2>Speed: {race.speed}</h2>
			<h2>Ability Bonuses:</h2>
			{race.ability_bonuses.map((ab_bonus) => {
				return (
					<ul>
						{ab_bonus.ability_score.name} +{ab_bonus.bonus}
					</ul>
				);
			})}

			{/* ABILITY_BONUS_OPTIONS SOMETIMES NULL*/}
			{race.ability_bonus_options ? (
				<React.Fragment>
					<h2>Ability Bonus Options:</h2>
					<h4>Choose {race.ability_bonus_options.choose}</h4>
					{race.ability_bonus_options.from.map((option) => {
						return (
							<ul>
								{option.ability_score.name} +{option.bonus}
							</ul>
						);
					})}
				</React.Fragment>
			) : null}

			<h2>Alignment:</h2>
			<p>{race.alignment}</p>

			<h2>Age:</h2>
			<p>{race.age}</p>

			<h2>Size Description:</h2>
			<p>{race.size_description}</p>

			{/* STARTING PROFICIENCIES AND OPTIONS SOMETIMES NULL */}
			{race.starting_proficiency_options ? (
				<React.Fragment>
					<h2>Proficiency Options:</h2>
					<h4>Choose {race.starting_proficiency_options.choose}</h4>
					{race.starting_proficiency_options.from.map((option) => {
						return <ul>{option.name}</ul>;
					})}
				</React.Fragment>
			) : null}

			<h2>Languages:</h2>
			{race.languages.map((lang) => {
				return <ul>{lang.name}</ul>;
			})}

			{/* LANGUAGE OPTIONS SOMETIMES NULL */}
			{race.language_options ? (
				<React.Fragment>
					<h2>Language Options:</h2>
					<h4>Choose {race.language_options.choose}</h4>
					{race.language_options.from.map((option) => {
						return <ul>{option.name}</ul>;
					})}
				</React.Fragment>
			) : null}

			<h2>Language Description:</h2>
			<p>{race.language_desc}</p>

			<h2>Traits:</h2>
			{race.traits.map((trait) => {
				return <ul>{trait.name}</ul>;
			})}

			{/* TRAIT_OPTIONS SOMETIMES NULL */}
			{race.trait_options ? (
				<React.Fragment>
					<h2>Trait Options:</h2>
					<h4>Choose {race.trait_options.choose}</h4>
					{race.trait_options.from.map((option) => {
						return <ul>{option.name}</ul>;
					})}
				</React.Fragment>
			) : null}
		</div>
	);
}

const mapStateToProps = ({ races }) => {
	const race = races.all.find((race) => {
		return race.index === window.location.href.split("/").slice(-1)[0];
	});

	return {
		race,
	};
};

export default connect(mapStateToProps)(Race);
