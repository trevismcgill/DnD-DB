import React from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import SpellList from "./SpellList";

function SpellCard({ title, spells }) {
	const klassPresent = (element) => element.name === title;

	let imageURL =
		"https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/342/420/618/636272680339895080.png";

	let spellList = spells.filter((spell) => {
		const klassExists = spell.classes.some(klassPresent);

		if (title === spell.school.name) {
			imageURL = require(`../../../public/assets/imgs/magic-school-imgs/${title}.png`);
			return title === spell.school.name;
		} else if (title === spell.level.toString()) {
			return title === spell.level.toString();
		} else if (klassExists) {
			return klassPresent;
		}
	});

	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src={imageURL.default} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<SpellList spells={spellList} />
			</Card.Body>
		</Card>
	);
}

const mapStateToProps = ({ spells }) => {
	return {
		spells: spells.all,
	};
};

export default connect(mapStateToProps)(SpellCard);
