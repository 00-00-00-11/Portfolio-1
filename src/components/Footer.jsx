import React, { Component } from "react";
import "../App.css";
import "./css/util/Footer.css";

class MainFooter extends Component {
	render() {
		return (
			<div>
				<div class="footer-link">
					<p>&copy; ThatGuyJamal</p>
					<a
						href="https://github.com/ThatGuyJamal/Basic-HTML-Template"
						class="button"
						target="_blank"
					>
						GitHub Link
					</a>
					<a
						href="https://discord.gg/NbqBQbaejS"
						class="button2"
						target="_blank"
					>
						ThatGuyJamal's Discord Server
					</a>
					<a
						href="https://www.youtube.com/channel/UCVOQobByo_2WISQf2037eXQ"
						class="button"
						target="_blank"
					>
						ThatGuyJamal's YouTube channel
					</a>
				</div>
			</div>
		);
	}
}

export default MainFooter;
