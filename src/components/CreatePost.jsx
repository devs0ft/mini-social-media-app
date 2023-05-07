import React, { useRef, useState } from "react";

function CreatePost({ user, setPosts, posts }) {
	const [content, setContent] = useState("");
	const [image, setImage] = useState(null);

	// const imageRef = useRef();

	const handleSubmit = (event) => {
		event.preventDefault();
		const post = { content, image, user };
		console.log(post);
		setPosts([post, ...posts]);
		// setPosts("");
	};

	return (
		<div>
			<h2>Create New Post</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					onChange={(event) => setContent(event.target.value)}
					value={content}
					placeholder="add a post"
				/>
				<br />
				<input
					type="file"
					onChange={(event) => setImage(event.target.files[0])}
					// ref={imageRef}
				/>
				<br />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default CreatePost;
