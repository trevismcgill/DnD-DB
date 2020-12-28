import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteCharacter } from "../redux/actions/characterActions";

class Character extends Component {
	dltClick = (e) => {
		this.props.deleteCharacter(this.props.character, this.props.history);
	};

	render() {
		return (
			<div>
				<h1>{this.props.character.name}</h1>
				<h2>{this.props.klass.name}</h2>
				<h2>{this.props.race.name}</h2>
				<h3>Age: {this.props.character.age}</h3>
				<h3>Weight: {this.props.character.weight}</h3>
				<h3>Height: {this.props.character.height}</h3>
				<h3>Alignment: {this.props.character.alignment}</h3>
				<button onClick={this.dltClick}>Delete</button>
			</div>
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
