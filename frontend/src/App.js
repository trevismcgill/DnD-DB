// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import CharacterIndex from "./containers/CharacterIndex";
import CharacterForm from "./components/CharacterForm";
import CharacterKlassIndex from "./containers/CharacterKlassIndex";
import CharacterKlass from "./components/CharacterKlass";
import RaceIndex from "./containers/RaceIndex";
import Race from "./components/Race";

function App() {
	return (
		<div className="App">
			<Router>
				<NavBar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/characters" component={CharacterIndex} />
					<Route path="/characters/new" component={CharacterForm} />
					<Route exact path="/classes" component={CharacterKlassIndex} />
					<Route exact path="/classes/:id" component={CharacterKlass} />
					<Route exact path="/races" component={RaceIndex} />
					<Route exact path="/races/:id" component={Race} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
