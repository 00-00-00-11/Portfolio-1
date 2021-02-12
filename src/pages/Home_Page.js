import "../build/App.css";
import React_Logo from "../components/React_Logo";
import Greet_text from "../components/js/home/Greet_text";
import SubscribeMessage from "../components/js/home/SubscribeMessage";

function Home_Page() {
	return (
		<div className="App">
			<header className="App-header">
				<Greet_text />
				<React_Logo />
				<SubscribeMessage />
			</header>
		</div>
	);
}

export default Home_Page;
