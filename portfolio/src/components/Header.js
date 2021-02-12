import React, { Component } from "react";
import "../App.css";
import "./css/util/Header.css";

class MainHeader extends Component {
	render() {
		return (
			<div>
				<div class="Header-link">
					<h1>Jamal's Portfolio</h1>

					<ul class="nav-link">
						<a href="">Home</a>
						<a href="">Hire</a>
						<a href="">Contact</a>
						<a href="./pages/Test.js">Test</a>
					</ul>
				</div>
			</div>
		);
	}
}

export default MainHeader;
