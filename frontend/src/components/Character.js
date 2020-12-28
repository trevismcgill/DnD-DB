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
				<h1>
					{this.props.character.name} the {this.props.race.name}{" "}
					{this.props.klass.name}
				</h1>
				<p>Age: {this.props.character.age}</p>
				<p>Weight: {this.props.character.weight} lbs.</p>
				<p>Height: {this.props.character.height} in.</p>
				<p>Alignment: {this.props.character.alignment}</p>
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
