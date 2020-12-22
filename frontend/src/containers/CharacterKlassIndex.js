import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
class CharacterKlassIndex extends Component {
	render() {
		return (
			<div>
				<h1>Character Class Index</h1>
				{this.props.klasses.map((klass) => (
					<Container>
						<Row>
							<Link to={`/classes/${klass.name.toLowerCase()}`}>
								{klass.name}
							</Link>
						</Row>
					</Container>
				))}
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
