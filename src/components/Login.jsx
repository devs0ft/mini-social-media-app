import React from "react";
import { useState } from "react";

function Login({ setUser }) {
	const [username, setUsername] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		setUser(username);
	};
	return (
		<div>
			<h1>Login </h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					onChange={(event) => setUsername(event.target.value)}
					placeholder="enter user name"
				/>
				<br />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default Login;
