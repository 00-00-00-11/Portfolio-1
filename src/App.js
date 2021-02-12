import "./build/App.css";
import MainHeader from "./components/Header";
import MainFooter from "./components/Footer";
import Home_Page from "./pages/Home_Page";

function App() {
	return (
		<div className="App">
			<MainHeader />
			<header className="App-header">
				<Home_Page />
			</header>
			<MainFooter />
		</div>
	);
}

export default App;
