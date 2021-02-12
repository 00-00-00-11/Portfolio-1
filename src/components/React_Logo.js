import React, { Component } from "react";
import logo from "../build/logo.svg";
import "../build/App.css";

class React_Logo extends Component {
	render() {
		return (
			<div>
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					<a
						className="App-link"
						href="https://github.com/DeepWebDevelopers/Portfolio"
						target="_blank"
						rel="noopener noreferrer"
					>
						{" "}
						Website Github
					</a>
				</p>
			</div>
		);
	}
}

export default React_Logo;

// Allows logo to be its own class.
