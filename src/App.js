//! Pages
import MainHeader from "./components/Header";
import MainFooter from "./components/Footer";
import HomePage from "./pages/HomePage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";
import TestPage from "./pages/Test/TestPage";
import NotFound404Error from "./components/NotFound404";
import GamesHome from "./pages/GamesHome";
import GameOne from "./pages/games/GameOne";
import GameTwo from "./pages/games/GameTwo";
//! Deps
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<MainHeader />

				<div className="web-struct">
					<Switch>
						<Route exact path="/">
							<HomePage />
						</Route>
						<Route exact path="/resume">
							<ResumePage />
						</Route>
						<Route exact path="/contact-us">
							<ContactPage />
						</Route>
						<Route exact path="/development">
							<TestPage />
						</Route>
						<Route exact path="/GamesHome">
							<GamesHome />
						</Route>
						<Route exact path="/GamesHome/GameOne">
							<GameOne />
						</Route>
						<Route exact path="/GamesHome/GameTwo">
							<GameTwo />
						</Route>
						<Route path="*">
							<NotFound404Error />
						</Route>
					</Switch>
				</div>
				<MainFooter />
			</div>
		</Router>
	);
}

export default App;

//! Auth Testing
// https://www.youtube.com/watch?v=PKwu15ldZ7k

// import React from "react";
// import Signup from "./UserAuth/SignUp";
// import { Container } from "react-bootstrap";
// import { AuthProvider } from "./UserAuth/context/AuthContext";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Dashboard from "./UserAuth/Dashboard";
// import Login from "./UserAuth/Login";
// import PrivateRoute from "./UserAuth/PrivateRoute";
// import ForgotPassword from "./UserAuth/ForgotPassword";
// import UpdateProfile from "./UserAuth/UpdateProfile";

// function App() {
// 	return (
// 		<Container
// 			className="d-flex align-items-center justify-content-center"
// 			style={{ minHeight: "100vh" }}
// 		>
// 			<div className="w-100" style={{ maxWidth: "400px" }}>
// 				<Router>
// 					<AuthProvider>
// 						<Switch>
// 							<PrivateRoute exact path="/" component={Dashboard} />
// 							<PrivateRoute path="/update-profile" component={UpdateProfile} />
// 							<Route path="/signup" component={Signup} />
// 							<Route path="/login" component={Login} />
// 							<Route path="/forgot-password" component={ForgotPassword} />
// 						</Switch>
// 					</AuthProvider>
// 				</Router>
// 			</div>
// 		</Container>
// 	);
// }

// export default App;
