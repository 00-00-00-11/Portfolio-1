import React from "react";
import ReactDOM from "react-dom";
import "./build/index.css";
import App from "./App.js";
//! Optional for auth.
// import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
