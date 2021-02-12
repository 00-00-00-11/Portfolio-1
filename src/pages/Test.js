import "../App.css";
import React_Logo from "./components/React_Logo";
import MainHeader from "./components/Header";

function Test_Page() {
	return (
		<div className="App">
			<MainHeader />
			<header className="App-header">
				<Greet_text />
				<React_Logo />
			</header>
		</div>
	);
}

export default Test_Page;
