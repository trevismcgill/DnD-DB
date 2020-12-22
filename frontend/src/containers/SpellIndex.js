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

	toggleView = () => {
		switch (true) {
			case this.state.bySchool:
				return (
					<div>
						<BySchoolSpells spells={this.props.spells} />
					</div>
				);
			case this.state.byLevel:
				return (
					<div>
						<ByLevelSpells spells={this.props.spells} />
					</div>
				);
			case this.state.byKlass:
				return (
					<div>
						<ByKlassSpells spells={this.props.spells} />
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
				<h1>Spells</h1>
				Filter:
				<button name="byAllButton" onClick={this.handleClick}>
					All
				</button>
				<button name="bySchoolButton" onClick={this.handleClick}>
					School
				</button>
				<button name="byLevelButton" onClick={this.handleClick}>
					Level
				</button>
				<button name="byKlassButton" onClick={this.handleClick}>
					Class
				</button>
				{this.toggleView()}
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
