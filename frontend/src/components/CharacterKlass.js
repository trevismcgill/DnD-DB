import React from "react";
import { connect } from "react-redux";
import SpellCastingInfo from "./spellCastingInfo";
import { Image } from "react-bootstrap";

function CharacterKlass({ klass }) {
	const imageURL = require(`../../public/assets/imgs/character-class-imgs/${klass.name}.png`);
	return (
		<div>
			<Image src={imageURL.default} />
			<h1>{klass.name}</h1>
			<h2>Hit Die: {klass.hit_die}</h2>
			<h2>Proficiencies:</h2>
			{klass.proficiencies.map((proficiency) => {
				return <ul>{proficiency.name}</ul>;
			})}
			<h2>Saving Throws:</h2>
			{klass.saving_throws.map((st) => {
				return <ul>{st.name}</ul>;
			})}
			<h2>Subclasses:</h2>
			{klass.subclasses.map((sub) => {
				return <ul>{sub.name}</ul>;
			})}
			{klass.spellcasting ? <SpellCastingInfo klass={klass} /> : null}
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
