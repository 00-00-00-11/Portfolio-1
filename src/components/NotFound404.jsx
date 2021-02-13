import React from "react";
import { Link } from "react-router-dom";
import "./css/util/Main.css";
const NotFound404Error = () => {
	return (
		<div className="page-build">
			<h1>Sorry!</h1>
			<img
				className="test-img-main-def"
				src="https://media.giphy.com/media/14uQ3cOFteDaU/source.gif"
				alt="Gamer Gif"
			></img>
			<p>This page can't be found!</p>
			<Link to="/">Back to home page...</Link>
		</div>
	);
};
export default NotFound404Error;
