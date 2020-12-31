import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteCharacter } from "../redux/actions/characterActions";

class Character extends Component {
	dltClick = (e) => {
		const { deleteCharacter, character, history } = this.props;
		deleteCharacter(character, history);
	};

	render() {
		const { character, klass, race } = this.props;
		return (
			<>
				{character && klass && race ? (
					<div>
						<h1>
							{character.name} the {race.name} {klass.name}
						</h1>
						<p>Age: {character.age}</p>
						<p>Weight: {character.weight} lbs.</p>
						<p>Height: {character.height} in.</p>
						<p>Alignment: {character.alignment}</p>
						<button onClick={this.dltClick}>Delete</button>
					</div>
				) : null}
			</>
		);
	}
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
