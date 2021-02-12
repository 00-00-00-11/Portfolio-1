import "./App.css";
import Greet_text from "./components/js/home/Greet_text";
//import Welcome from "./components/js/home/Welcome";
import Message from "./components/js/home/Message";
import React_Logo from "./components/React_Logo";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Greet_text />
				<React_Logo />
				<Message />
			</header>
		</div>
	);
}

export default App;
