import React from "react";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import SpellList from "./SpellList";
import logo from "../../assets";

function SpellCard({ title, spells }) {
	const klassPresent = (element) => element.name === title;
	// console.log(klassPresent);
	// const klassName = spells.find((spell) => {
	//     spell.classes.find((class) => {
	//         return class.name === title
	//     }
	// })

	let imageURL =
		"https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/342/420/618/636272680339895080.png";

	let spellList = spells.filter((spell) => {
		const klassExists = spell.classes.some(klassPresent);

		if (title === spell.school.name) {
			// imageURL = `/frontend/src/assest/imgs/magic-school-imgs/${title}.png`;
			imageURL = `../../assets/imgs/magic-school-imgs/${title}.png`;
			return title === spell.school.name;
		} else if (title === spell.level.toString()) {
			return title === spell.level.toString();
		} else {
			return "";
		}
		//      return title === spell.classes.find((class) => {
		//         return title === class.name
		//      }))
		// )
	});

	spells.map((spell, index) => {
		if (spell.classes.some(klassPresent)) {
			return spell.classes[index];
		}
	});
	// function handleClick(event) {
	// 	switch (event.target.name) {
	// 		case event.target.name:
	// 			return (
	// 				<div>
	// 					<SpellList spells={spellList} />
	// 				</div>
	// 			);
	// 		default:
	// 			return null;
	// 	}
	// }

	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src={require(imageURL)} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				{/* <Button variant="primary" name={`button${title}`}>
					See Spells
				</Button> */}
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
