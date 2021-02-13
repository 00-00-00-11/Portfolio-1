import React from "react";
import { Link } from "react-router-dom";

function GameOne() {
	return (
		<div>
			<div className="App">
				<header className="App-header">
					<h1>Game One!</h1>
					<button className="button-style-pur-link">
						<Link to="/GamesHome">Back to Game Home</Link>
					</button>
				</header>
			</div>
		</div>
	);
}

export default GameOne;
