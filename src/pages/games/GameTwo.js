import React from "react";
import { Link } from "react-router-dom";

function GameTwo() {
	return (
		<div>
			<div className="App">
				<header className="App-header">
					<h1>Game Two!</h1>
					<button className="button-style-pur-link">
						<Link to="/GamesHome">Back to Game Home</Link>
					</button>
				</header>
			</div>
		</div>
	);
}

export default GameTwo;
