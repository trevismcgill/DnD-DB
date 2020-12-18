import React from "react";
import { connect } from "react-redux";
import spellCastingInfo from "./spellCastingInfo";

function CharacterKlass({ klass }) {
	// const hasSpellCasting = klass.spellcasting;
	// if (hasSpellCasting !== null) {
	// 	<spellCastingInfo />;
	// }

	return (
		<div>
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

			{/* {
            klass.spellcasting !== null &&  */}
			<spellCastingInfo klass={klass} />

			{/* <h2>Spellcasting:</h2>

			<p>{klass.spellcasting.spellcasting_ability.name}</p>

			{klass.spellcasting.info.map(({ name, desc }) => {
				return (
					<React.Fragment>
						<h5>{name}:</h5>
						{desc.map((text) => (
							<p>{text}</p>
						))}
					</React.Fragment>
				);
			})} */}
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
