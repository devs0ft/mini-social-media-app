import React from "react";

function Header({ user, setUser }) {
	return (
		<div>
			<h2>Hello {user}</h2>
			<button onClick={() => setUser("")} type="submit">
				Logout
			</button>
		</div>
	);
}

export default Header;
