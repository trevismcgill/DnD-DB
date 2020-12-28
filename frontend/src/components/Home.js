import React from "react";
import { Image } from "react-bootstrap";
import DnDLogo from "../imgs/DnD-Logo.png";
import D20 from "../imgs/D20.png";

export default function Home() {
	return (
		<div>
			<Image src={DnDLogo} />
			<Image src={D20} />
		</div>
	);
}
