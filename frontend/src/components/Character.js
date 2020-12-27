import React from "react";
import { connect } from "react-redux";
import { deleteCharacter } from "../redux/actions/characterActions";

function Character({ character, klass, race }) {
	return (
		<div>
			<h1>{character.name}</h1>
			<h2>{klass.name}</h2>
			<h2>{race.name}</h2>
			<h3>Age: {character.age}</h3>
			<h3>Weight: {character.weight}</h3>
			<h3>Height: {character.height}</h3>
			<h3>Alignment: {character.alignment}</h3>
			<button onClick={deleteCharacter(character)}>Delete</button>
		</div>
	);
}

const mapStateToProps = ({ characters, klasses, races }) => {
	const character = characters.all.find((character) => {
		return character.name === window.location.href.split("/").slice(-1)[0];
	});
	const klass = klasses.all.find((klass) => {
		return klass.id === character.character_klass_id;
	});
	const race = races.all.find((race) => {
		return race.id === character.race_id;
	});
	return {
		character,
		klass,
		race,
	};
};

export default connect(mapStateToProps, { deleteCharacter })(Character);
