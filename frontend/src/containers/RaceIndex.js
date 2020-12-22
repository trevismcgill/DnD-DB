import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

function RaceIndex({ races }) {
	return (
		<div>
			<h1>Races</h1>
			{races.map((race) => (
				<Container>
					<Row>
						<Link to={`/races/${race.name.toLowerCase()}`}>{race.name}</Link>
					</Row>
				</Container>
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
