import React, { Component } from "react";
import { Form, Image, Container, Row, Col, Button } from "react-bootstrap";
import { createCharacter } from "../redux/actions/characterActions";
import { connect } from "react-redux";
import CharacterSheet from "../imgs/CharacterSheet.png";
import "bootstrap/dist/css/bootstrap.css";
class CharacterForm extends Component {
	state = {
		name: "",
		character_klass: "",
		race: "",
		age: "",
		height: "",
		weight: "",
		alignment: "",
	};

	submit = (e) => {
		e.preventDefault();
		this.props.createCharacter(this.state);

		this.props.history.push("/characters");
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
									onChange={(e) =>
										this.setState({ character_klass: e.target.value })
									}
									type="text"
									value={this.state.character_klass}
									placeholder="class"
								/>
								<Form.Control
									onChange={(e) => this.setState({ race: e.target.value })}
									type="text"
									value={this.state.race}
									placeholder="race"
								/>
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
								<Button type="submit">Submit</Button>
							</Col>
						</Row>
					</Form>
				</div>
			</Container>
		);
	}
}

export default connect(null, { createCharacter })(CharacterForm);
