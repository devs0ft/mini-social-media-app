import React, { useEffect, useState } from "react";
import Login from "./Components/Login";
import CreatePost from "./components/CreatePost";
import Header from "./components/Header";
import PostList from "./components/PostList";

function App() {
	const [user, setUser] = useState("");
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		document.title = user ? `${user}'s Feed` : "Please Login";
	}, [user]);

	if (!user) {
		return <Login setUser={setUser} />;
	}

	return (
		<div>
			<Header user={user} setUser={setUser} />
			<CreatePost user={user} posts={posts} setPosts={setPosts} />
			<PostList posts={posts} />
		</div>
	);
}

export default App;
