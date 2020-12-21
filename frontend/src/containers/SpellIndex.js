import React from "react";
// import { Card } from "react-bootstrap";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import BySchoolSpells from "../components/spell-components/BySchoolSpells";
import ByLevelSpells from "../components/spell-components/ByLevelSpells";
import ByKlassSpells from "../components/spell-components/ByKlassSpells";
import SpellList from "../components/spell-components/SpellList";

class SpellIndex extends React.Component {
	state = {
		bySchool: false,
		byLevel: false,
		byKlass: false,
		byAll: true,
	};

	toggleView = (state) => {
		console.log(state.bySchool);
		switch (state) {
			case state.bySchool:
				console.log("IN SCHOOL");
				return (
					<div>
						<BySchoolSpells spells={this.props.spells} />
					</div>
				);
			case state.byLevel:
				return (
					<div>
						<ByLevelSpells />
					</div>
				);
			case state.byKlass:
				return (
					<div>
						<ByKlassSpells />
					</div>
				);
			default:
				return (
					<div>
						<SpellList spells={this.props.spells} />
					</div>
				);
		}
	};

	handleClick = (event) => {
		switch (event.target.name) {
			case "bySchoolButton":
				console.log("YOU CLICKED SCHOOL");
				this.setState({
					bySchool: true,
					byLevel: false,
					byKlass: false,
					byAll: false,
				});
				break;
			case "byLevelButton":
				this.setState({
					bySchool: false,
					byLevel: true,
					byKlass: false,
					byAll: false,
				});
				break;
			case "byKlassButton":
				this.setState({
					bySchool: false,
					byLevel: false,
					byKlass: true,
					byAll: false,
				});
				break;
			default:
				this.setState({
					bySchool: false,
					byLevel: false,
					byKlass: false,
					byAll: true,
				});
		}
	};

	render() {
		return (
			<div>
				Spells
				<button name="bySchoolButton" onClick={this.handleClick}>
					By School
				</button>
				<button name="byLevelButton" onClick={this.handleClick}>
					By Level
				</button>
				<button name="byKlassButton" onClick={this.handleClick}>
					By Level
				</button>
				{this.toggleView(this.state)}
			</div>
		);
	}
}

const mapStateToProps = ({ spells }) => {
	return {
		spells: spells.all,
	};
};

export default connect(mapStateToProps)(SpellIndex);
