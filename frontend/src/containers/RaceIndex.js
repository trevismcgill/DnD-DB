import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import RaceCard from "../components/RaceCard";

function RaceIndex({ races }) {
	return (
		<div>
			<h1>Races</h1>
			<Container>
				<Row md={4}>
					{races.map((race) => (
						<RaceCard race={race} />
					))}
				</Row>
			</Container>
		</div>
	);
}

const mapStateToProps = ({ races }) => {
	return {
		races: races.all,
	};
};

export default connect(mapStateToProps)(RaceIndex);
