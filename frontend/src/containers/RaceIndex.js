import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function RaceIndex({ races }) {
	return (
		<div>
			<h1>Races</h1>
			{races.map((race) => (
				<ul>
					<Link to={`/races/${race.name.toLowerCase()}`}>{race.name}</Link>
				</ul>
			))}
		</div>
	);
}

const mapStateToProps = ({ races }) => {
	return {
		races: races.all,
	};
};

export default connect(mapStateToProps)(RaceIndex);
