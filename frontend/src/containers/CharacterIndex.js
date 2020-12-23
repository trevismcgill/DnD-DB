import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Character from "../components/Character";

function CharacterIndex({ characters }) {
	return (
		<div>
			<button onClick={() => window.scrollTo(0, 0)}>
				<Link to={"/characters/new"}>Create New Character</Link>
			</button>
			{characters.map((character) => (
				<Character character={character} />
			))}
		</div>
	);
}

const mapStateToProps = ({ characters }) => {
	return {
		characters: characters.all,
	};
};

export default connect(mapStateToProps)(CharacterIndex);
