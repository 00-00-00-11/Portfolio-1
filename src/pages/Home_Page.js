import "../build/App.css";
import React_Logo from "../components/React_Logo";
import Greet_text from "../components/js/home/Greet_text";
import SubscribeMessage from "../components/js/home/SubscribeMessage";
// import { useState } from "react";

function Home_Page() {
	// const [blogs, setBlogs] = useState([
	// 	{ title: "My new website", body: "lorem ipsum...", author: "jamal", id: 1 },
	// 	{ title: "Welcome party!", body: "lorem ipsum...", author: "jada", id: 2 },
	// 	{
	// 		title: "Web dev top tips",
	// 		body: "lorem ipsum...",
	// 		author: "jaden",
	// 		id: 3,
	// 	},
	// ]);

	return (
		<div className="App">
			<header className="App-header">
				<Greet_text />
				<React_Logo />
				<SubscribeMessage />
				{/* <div>
					{blogs.map((blog) => (
						<div className="blog-preview" key={blog.id}>
							<h2>{blog.title}</h2>
							<p>Writen by {blog.author}</p>
						</div>
					))}
				</div> */}
			</header>
		</div>
	);
}

export default Home_Page;
