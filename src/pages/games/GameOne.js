import React from "react";
import { Link } from "react-router-dom";
import TicTacToeGame from "../../components/games/one/TicTacToeGame"

function GameOne() {
	return (
		<div>
			<div className="App">
				<header className="App-header">
					<h1>TicTacToe!</h1>
					<TicTacToeGame />
					<button className="button-style-pur-link">
						<Link to="/GamesHome">Back to Game Home</Link>
					</button>
					<p></p>
				</header>
			</div>
		</div>
	);
}

export default GameOne;
