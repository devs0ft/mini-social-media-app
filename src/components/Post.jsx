import React from "react";

function Post({ post }) {
	return (
		<div>
			{post.image && (
				<img
					style={{ height: 200, width: 300, objectFit: "cover" }}
					src={URL.createObjectURL(post.image)}
					alt="post cover"
				/>
			)}
			<p>{post.content}</p>
			<p>{post.user}</p>
		</div>
	);
}

export default Post;
