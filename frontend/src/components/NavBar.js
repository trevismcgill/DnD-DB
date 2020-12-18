import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<div>
			<ul>
				<Link to="/">Home</Link>
			</ul>
			<ul>
				<Link to="/classes">Character Classes</Link>
			</ul>
			<ul>
				<Link to="/races">Races</Link>
			</ul>
			<ul>
				<Link to="/spells">Spells</Link>
			</ul>
		</div>
	);
}
