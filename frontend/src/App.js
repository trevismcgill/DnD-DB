import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import {
	getCharacters,
	getKlasses,
	getRaces,
	getSpells,
} from "../src/redux/actions/seedStore";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import CharacterIndex from "./containers/CharacterIndex";
import CharacterForm from "./components/CharacterForm";
import CharacterKlassIndex from "./containers/CharacterKlassIndex";
import CharacterKlass from "./components/CharacterKlass";
import RaceIndex from "./containers/RaceIndex";
import Race from "./components/Race";
import SpellIndex from "./containers/SpellIndex";
import Spell from "./components/Spell";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
	componentDidMount() {
		this.props.getCharacters();
		this.props.getKlasses();
		this.props.getRaces();
		this.props.getSpells();
	}

	render() {
		return (
			<div className="App">
				<Router>
					<NavBar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/characters" component={CharacterIndex} />
						<Route exact path="/characters/new" component={CharacterForm} />
						<Route exact path="/classes" component={CharacterKlassIndex} />
						<Route exact path="/classes/:id" component={CharacterKlass} />
						<Route exact path="/races" component={RaceIndex} />
						<Route exact path="/races/:id" component={Race} />
						<Route exact path="/spells" component={SpellIndex} />
						<Route exact path="/spells/:id" component={Spell} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default connect(null, {
	getCharacters,
	getKlasses,
	getRaces,
	getSpells,
})(App);
