import React, { Component } from "react";

class Message extends Component {
	constructor() {
		super();
		this.state = {
			message: "Welcome Visitor!",
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
				<p>Want to view my YouTube channel? Click below! </p>
				<button onClick={() => this.changeMessage()}>
					<a
						className="Button-link"
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

export default Message;

// learning how to use states
