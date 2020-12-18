import React from "react";
// import { connect } from "react-redux";

export default function spellCastingInfo({ klass }) {
	debugger;
	return (
		<div>
			<h2>Spellcasting:</h2>

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
			})}
		</div>
	);
}

// const mapStateToProps = () => {};

// export default connect(mapStateToProps)(spellCastingInfo);
