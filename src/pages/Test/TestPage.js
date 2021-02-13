import React from "react";
import "../../components/css/util/Main.css";
import "./TestPage.css";
import { Link } from "react-router-dom";

const TestPage = () => {
	return (
		<div>
			<div className="test-header-link test-header-text-color">
				<h1>This is a Development page</h1>
				<p>It may more may not be stable...</p>
			</div>
			<div className="page-build-raw">
				<h2>Ah I see you want to test some of my skills huh?</h2>
				<p>
					Okay then I will take you up on that offer. Head over to my Games Page
					and try them out!
				</p>
				<img
					className="test-img-main-def"
					src="https://media.giphy.com/media/cgCMnZr84zE40/giphy.gif"
					alt="Please Stand By Image"
				></img>
				<p></p>
				<p></p>
				<button className="test-button-link">
					<Link to="/GamesHome">Games</Link>
				</button>
			</div>
		</div>
	);
};
export default TestPage;
