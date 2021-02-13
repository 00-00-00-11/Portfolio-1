import React, { Component } from "react";
import "../../css/util/Main.css";

class SubscribeMessage extends Component {
	constructor() {
		super();
		this.state = {
			message: "Click the Button below to subscribe!",
		};
	}
	// making an interactive button
	changeMessage() {
		this.setState({
			message: "Thanks for subscribing!",
		});
	}

	render() {
		return (
			<div>
				<h1>{this.state.message}</h1>
				<button onClick={() => this.changeMessage()}>
					<a
						className="button-style-pur-link"
						href="https://www.youtube.com/channel/UCVOQobByo_2WISQf2037eXQ"
						target="_blank"
						rel="noopener noreferrer"
					>
						Subscribe Here!
					</a>
				</button>
			</div>
		);
	}
}

export default SubscribeMessage;

// learning how to use states
