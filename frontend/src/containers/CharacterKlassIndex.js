import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row } from "react-bootstrap";
import KlassCard from "../components/KlassCard";
class CharacterKlassIndex extends Component {
	render() {
		return (
			<div>
				<h1>Character Class Index</h1>
				<Container>
					<Row md={4}>
						{this.props.klasses.map((klass) => (
							<KlassCard klass={klass} />
						))}
					</Row>
				</Container>
			</div>
		);
	}
}

const mapStateToProps = ({ klasses }) => {
	return {
		klasses: klasses.all,
	};
};

export default connect(mapStateToProps)(CharacterKlassIndex);
