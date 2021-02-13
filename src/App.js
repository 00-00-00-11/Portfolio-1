import MainHeader from "./components/Header";
import MainFooter from "./components/Footer";
import Home_Page from "./pages/Home_Page";
import Resume_Page from "./pages/Resume_Page";
import Contact_Page from "./pages/Contact_Page";
import Test_Page from "./pages/Test_Page";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<MainHeader />
				<div className="web-struct">
					<Switch>
						<Route exact path="/">
							<Home_Page />
						</Route>
						<Route exact path="/resume">
							<Resume_Page />
						</Route>
						<Route exact path="/contact-us">
							<Contact_Page />
						</Route>
						<Route exact path="/development">
							<Test_Page />
						</Route>
					</Switch>
				</div>
				<MainFooter />
			</div>
		</Router>
	);
}

export default App;
