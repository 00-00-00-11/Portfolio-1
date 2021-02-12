import React, { Component } from "react";
import "../build/App.css";
import "./css/util/Header.css";

class MainHeader extends Component {
	render() {
		return (
			<div>
				<div class="Header-link">
					<h1>Jamal's Portfolio</h1>

					<ul class="nav-link">
						<a href="/">Home</a>
						<a href="/hire/us">Hire</a>
						<a href="/contact/us">Contact</a>
						<a href="/development">Test</a>
					</ul>
				</div>
			</div>
		);
	}
}

export default MainHeader;
