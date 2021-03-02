import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row } from "react-bootstrap";
import RaceCard from "../components/RaceCard";

class RaceIndex extends Component {
	state = {
		search: "",
	};
	render() {
		return (
			<div>
				<h1>Races</h1>
				<input
					type="search"
					onChange={(e) =>
						this.setState(() => ({
							search: e.target.value,
						}))
					}
					value={this.state.search}
					placeholder="search races"
				/>
				<Container>
					<Row md={4}>
						{this.props.races.map((race) =>
							race.index.includes(this.state.search.toLowerCase()) ? (
								<RaceCard race={race} />
							) : null
						)}
					</Row>
				</Container>
			</div>
		);
	}
}

const mapStateToProps = ({ races }) => {
	return {
		races: races.all,
	};
};

export default connect(mapStateToProps)(RaceIndex);
