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
					<p>Game one is a simple TicTacToe Game you can play with a friend.</p>
					<button className="button-style-pur-link">
						<Link to="/GamesHome/GameTwo">Game Two</Link>
					</button>
					<p>More info on game two coming when development is complet.</p>

					<h2>Try out my Math Quiz.</h2>
					<button className="button-style-pur-link">
						<Link to="/GamesHome/MathQuiz">Math Quiz</Link>
					</button>
				</header>
			</div>
		</div>
	);
}

export default GamesHome;
