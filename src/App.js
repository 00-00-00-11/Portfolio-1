import "./build/App.css";
import Greet_text from "./components/js/home/Greet_text";
import Message from "./components/js/home/Message";
import React_Logo from "./components/React_Logo";
import MainHeader from "./components/Header";

function App() {
	return (
		<div className="App">
			<MainHeader />
			<header className="App-header">
				<Greet_text />
				<React_Logo />
				<Message />
			</header>
		</div>
	);
}

export default App;
