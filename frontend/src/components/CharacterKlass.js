import React from "react";
import { connect } from "react-redux";
// import CharacterKlassIndex from "../containers/CharacterKlassIndex";

function CharacterKlass({ klass }) {
	debugger;
	return (
		<div>
			<h1>{klass.name}</h1>
			<h2>Hit Die: {klass.hit_die}</h2>
			<h2>{klass.proficencies}</h2>
		</div>
	);
}

const mapStateToProps = ({ klasses }) => {
	const klass = klasses.all.find((klass) => {
		return klass.index === window.location.href.split("/").slice(-1)[0];
	});

	return {
		klass,
	};
};

export default connect(mapStateToProps)(CharacterKlass);
