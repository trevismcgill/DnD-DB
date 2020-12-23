import React, { Component } from "react";
import { Form, Image, Container, Row, Col } from "react-bootstrap";
import { createCharacter } from "../redux/actions/characterActions";
import { connect } from "react-redux";
import CharacterSheet from "../imgs/CharacterSheet.png";
import "bootstrap/dist/css/bootstrap.css";
class CharacterForm extends Component {
	state = {
		name: "",
		klass: "",
		race: "",
		age: "",
		height: "",
		weight: "",
		alignment: "",
		ability_scores: {
			STR: "",
			DEX: "",
			CON: "",
			INT: "",
			WIS: "",
			CHA: "",
		},
	};

	submit = (e) => {
		e.preventDefault();
		createCharacter();
	};

	render() {
		return (
			<Container>
				<div className="parent">
					<h1>Create a Character!</h1>
					<Image src={CharacterSheet} hidden="true" />
					<Form onSubmit={this.submit}>
						<Row>
							<Col>
								<Form.Control
									onChange={(e) => this.setState({ name: e.target.value })}
									type="text"
									value={this.state.name}
									placeholder="name"
								/>
								<Form.Control
									onChange={(e) => this.setState({ klass: e.target.value })}
									type="text"
									value={this.state.class}
									placeholder="class"
								/>
								<Form.Control
									onChange={(e) => this.setState({ race: e.target.value })}
									type="text"
									value={this.state.race}
									placeholder="race"
								/>
							</Col>
							<Col>
								<Form.Control
									onChange={(e) => this.setState({ age: e.target.value })}
									type="text"
									value={this.state.age}
									placeholder="age"
								/>
								<Form.Control
									onChange={(e) => this.setState({ height: e.target.value })}
									type="text"
									value={this.state.height}
									placeholder="height"
								/>
								<Form.Control
									onChange={(e) => this.setState({ weight: e.target.value })}
									type="text"
									value={this.state.weight}
									placeholder="weight"
								/>
								<Form.Control
									onChange={(e) => this.setState({ alignment: e.target.value })}
									type="text"
									value={this.state.alignment}
									placeholder="alignment"
								/>
								<Form.Control type="submit" />
							</Col>
						</Row>
					</Form>
				</div>
			</Container>
		);
	}
}

export default connect(null, { createCharacter })(CharacterForm);
