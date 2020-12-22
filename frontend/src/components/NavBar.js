import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

export default function Navbar() {
	return (
		<div>
			<Nav variant="tabs">
				<Nav.Item>
					<Nav.Link>
						<Link to="/">Home</Link>
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link>
						<Link to="/classes">Character Classes</Link>
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link>
						<Link to="/races">Races</Link>
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link>
						<Link to="/spells">Spells</Link>
					</Nav.Link>
				</Nav.Item>
			</Nav>
		</div>
	);
}
