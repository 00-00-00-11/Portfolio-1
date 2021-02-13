import React, { Component } from "react";
import "../build/App.css";
import "./css/util/Header.css";
import { Link } from "react-router-dom";

class MainHeader extends Component {
	render() {
		return (
			<div>
				<div class="Header-link">
					<h1>
						<Link to="/" className="link">
							Jamal's Portfolio
						</Link>
					</h1>

					<ul class="nav-link">
						<Link to="/">Home</Link>
						<Link to="/resume">Resume</Link>
						<Link to="/contact-us">Contact</Link>
						<Link to="/development">Test</Link>
					</ul>
				</div>
			</div>
		);
	}
}

export default MainHeader;
