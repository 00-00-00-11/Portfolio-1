import React, { Component } from "react";

class Page_timer extends Component {
	constructor(props) {
		super(props);
		this.state = { seconds: 0 };
	}

	tick() {
		this.setState((state) => ({
			seconds: state.seconds + 1,
		}));
	}

	componentDidMount() {
		this.interval = setInterval(() => this.tick(), 1000);
	}

	rrender() {
		return <div>Seconds: {this.state.seconds}</div>;
	}
}

export default Page_timer;

//! Not working yet.
