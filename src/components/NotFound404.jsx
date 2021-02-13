import React from "react";
import { Link } from "react-router-dom";

const NotFound404Error = () => {
	return (
		<div className="page-build">
			<h1>Sorry!</h1>
			<p>This page can't be found!</p>
			<Link to="/">Back to home page...</Link>
		</div>
	);
};
export default NotFound404Error;
