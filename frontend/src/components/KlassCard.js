import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.css";

export default class KlassCard extends Component {
	state = {
		num: 0,
	};
	render() {
		const { klass } = this.props;
		const { num } = this.state;
		const imageURL = require(`../../public/assets/imgs/character-class-imgs/${klass.name}.png`);
		return (
			<div>
				<Card style={{ width: "18rem" }}>
					<Card.Img variant="top" src={imageURL.default} />
					<Card.Body>
						<Card.Title>{klass.name}</Card.Title>
						<button onClick={() => window.scrollTo(0, 0)}>
							<Link to={`/classes/${klass.name.toLowerCase()}`}>See More</Link>
						</button>

						<button
							onClick={() =>
								this.setState(({ num }) => ({
									num: num + 1,
								}))
							}
						>
							{num}
						</button>
					</Card.Body>
				</Card>
			</div>
		);
	}
}
