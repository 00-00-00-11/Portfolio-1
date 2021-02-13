import React from "react";
import "../build/App.css";
import { Link } from "react-router-dom";

function GamesHome() {
	return (
		<div>
			<div className="App">
				<header className="App-header">
					<h1>Games!</h1>
					<p>
						Each button below goes to a different game to play. If there are any
						bugs or errors repor them to the{" "}
						<Link to="/contact-us">contact page.</Link> Thanks and enjoy!
					</p>
				</header>
			</div>
		</div>
	);
}

export default GamesHome;
