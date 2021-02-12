import logo from "./logo.svg";
import "./App.css";
import Greet_text from "./components/js/home/Greet_text";
import Welcome from "./components/js/home/Welcome";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Greet_text />

				<img src={logo} className="App-logo" alt="logo" />

				<a
					className="App-link"
					href="https://github.com/DeepWebDevelopers/Portfolio"
					target="_blank"
					rel="noopener noreferrer"
				>
					My GitHub
				</a>
				<Welcome />
			</header>
		</div>
	);
}

export default App;
