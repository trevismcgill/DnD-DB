import React, { Component } from "react";
import { Form, Image } from "react-bootstrap";
import { createCharacter } from "../redux/actions/characterActions";
import { connect } from "react-redux";
import CharacterSheet from "../imgs/CharacterSheet.png";
import "bootstrap/dist/css/bootstrap.css";
class CharacterForm extends Component {
	state = {
		name: "",
		class: "",
		race: "",
	};

	submit = (e) => {
		e.preventDefault();
	};

	render() {
		console.log(window.innerHeight);
		return (
			<div className="parent">
				<Image src={CharacterSheet} />
				<div className="child">
					<Form onSubmit={this.submit}>
						<input
							onChange={(e) => this.setState({ name: e.target.value })}
							type="text"
							value={this.state.name}
							placeholder="name"
						/>
						<input type="text" value={this.state.class} placeholder="class" />
						<input type="text" value={this.state.race} placeholder="race" />
						{/* <input type="text" value={this.state.} /> */}
						{/* <input type="text" value={this.state.} /> */}
						{/* <input type="text" value={this.state.} /> */}
						{/* <input type="text" value={this.state.} /> */}
						<input type="submit" />
					</Form>
				</div>
			</div>
		);
	}
}

export default connect(null, { createCharacter })(CharacterForm);
