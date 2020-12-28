import React, { Component } from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

class CharacterIndex extends Component {
	render() {
		return (
			<div>
				<div>
					<button onClick={() => window.scrollTo(0, 0)}>
						<Link to={"/characters/new"}>Create New Character</Link>
					</button>
				</div>
				<div>
					{this.props.characters.map((character) => (
						<Link to={`/characters/${character.name}`}>
							{character.name}
							<br></br>
						</Link>
					))}
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ characters }) => {
	return {
		characters: characters.all,
	};
};

export default connect(mapStateToProps)(CharacterIndex);
