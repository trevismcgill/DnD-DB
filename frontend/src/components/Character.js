import React from "react";
import { connect } from "react-redux";

function Character({ character }) {
	return (
		<div>
			<h1>{character.name}</h1>
			<h2>{character.klass}</h2>
			<h2>{character.race}</h2>
			<h3>Age: {character.age}</h3>
			<h3>Weight: {character.weight}</h3>
			<h3>Height: {character.height}</h3>
			<h3>Alignment: {character.alignment}</h3>
		</div>
	);
}

const mapStateToProps = ({ characters }) => {
	const character = characters.all.find((character) => {
		return character.name === window.location.href.split("/").slice(-1)[0];
	});
	return {
		character,
	};
};

export default connect(mapStateToProps)(Character);
