import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./index.css";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import GameIntroPage from "./components/GameIntroPage";
import Memory from "./components/Memory/Memory";
import About from "./components/About";
import WomenList from "./components/Women-Info/WomenList";
import WomanDetails from "./components/Women-Info/WomanDetails";
import Contact from "./components/Contact";
import Footer from "./components/Footer/Footer";

function App() {
	//State is defined here
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false); // add a new variable in the state to check if the data is loading
	const getData = () => {
		setIsLoading(true); // change the state: data is loading
		fetch("https://salty-chamber-10638.herokuapp.com/")
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				setIsLoading(false);
			});
	};

	useEffect(getData, []);

	return (
		<div className="App">
			{isLoading ? ( //while is loading the data, show this label
				<div>Loading ...</div>
			) : (
				//when the data is loaded
				<Router>
					<div>
						<Header />
						<Switch>
							<Route path="/memory/:level">
								<Memory data={data} />
							</Route>
							<Route
								path="/introgame"
								render={() => <GameIntroPage data={data} />}
							/>
							<Route
								path="/women/:id"
								render={(routeProps) => (
									<WomanDetails routeProps={routeProps} data={data} />
								)}
							/>
							<Route
								exact
								path="/women"
								render={() => <WomenList data={data} />}
							/>
							<Route path="/about" component={About} />
							<Route path="/contact" component={Contact} />
							<Route exact path="/" component={Home} />
						</Switch>
						<Footer info={data} />
					</div>
				</Router>
			)}
		</div>
	);
}

export default App;
