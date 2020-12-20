import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function SpellIndex({ spells }) {
	return (
		<div>
			<h1>Spells</h1>
			{spells.map((spell) => (
				<ul>
					<Link to={`/spells/${spell.index.toLowerCase()}`}>{spell.name}</Link>
				</ul>
			))}
		</div>
	);
}

const mapStateToProps = ({ spells }) => {
	return {
		spells: spells.all,
	};
};

export default connect(mapStateToProps)(SpellIndex);
