import React from "react";
import { Link } from "react-router-dom";
import "../components/css/util/Main.css";

function GamesHome() {
	return (
		<div>
			<div className="App">
				<header className="App-header">
					<img
						className="test-img-main-def"
						src="https://media.giphy.com/media/XVR9lp9qUDHmU/source.gif"
						alt="Gamer Gif"
					></img>
					<h1>Games!</h1>
					<p className="text-color-link-light-orange">
						Each button below goes to a different game to play. If there are any
						bugs or errors repor them to the
						<Link to="/contact-us"> contact page.</Link> Thanks and enjoy!
					</p>
					<button className="button-style-pur-link">
						<Link to="/GamesHome/GameOne/TicTacToe">Game One</Link>
					</button>
					<p>More info on game one coming when development is complet.</p>
					<button className="button-style-pur-link">
						<Link to="/GamesHome/GameTwo">Game Two</Link>
					</button>
					<p>More info on game two coming when development is complet.</p>
				</header>
			</div>
		</div>
	);
}

export default GamesHome;
