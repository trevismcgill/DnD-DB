import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class CharacterKlassIndex extends Component {
	render() {
		return (
			<div>
				<h1>Character Class Index</h1>
				{this.props.klasses.map((klass) => (
					<ul>
						<Link to={`/classes/${klass.name.toLowerCase()}`}>
							{klass.name}
						</Link>
					</ul>
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
