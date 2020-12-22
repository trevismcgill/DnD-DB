import React, { Component } from "react";
import { Form, Image } from "react-bootstrap";
import {createCharacter} from "../redux/actions/characterActions"
import {connect } from 'react-redux'

class CharacterForm extends Component {
	state = {
        imageURL: require("../../public/assets/imgs/character-sheet/CharacterSheet.png"),
        name: ''
    };
    
    submit = e => {
        e.preventDefault();

    }

	render() {
		return (
			<div>
				<Image src={imageURL.default} />
				<Form onSubmit={this.submit}>
					<input onChange={e => this.setState({name: e.target.value})} type="text" value={this.state.name} />
					<input type="text" value={this.state.} />
					<input type="text" value={this.state.} />
					<input type="text" value={this.state.} />
					<input type="text" value={this.state.} />
					<input type="text" value={this.state.} />
					<input type="text" value={this.state.} />
					<input type="submit" />
				</Form>
			</div>
		);
	}
}

export default connect(null, {createCharacter})(CharacterForm);
