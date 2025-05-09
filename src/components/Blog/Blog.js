"use client";
import React, { useEffect, useState } from "react";

import classes from "./Blog.module.scss";
import * as contentful from "contentful";

const client = contentful.createClient({
	space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE, // Replace with your space ID
	accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_CONTENT_DELIVERY_TOKEN, // Replace with your access token
});

export default function Blog() {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		const getData = async () => {
			const data = await client.getEntries();
			setPosts(data.items);
		};
		getData();
	}, []);

	return (
		<div className={classes.container}>
			<div className={classes.posts}>
				{posts && posts.length > 0 ? (
					posts.map((post, index) => {
						const { fields } = post;
						console.log("post", fields);
						return (
							<div key={index} className={classes.post}>
								<h1>{fields.title}</h1>
								<p>{fields.publishedDate}</p>
							</div>
						);
					})
				) : (
					<div>
						<h1>No Posts</h1>
					</div>
				)}
			</div>
		</div>
	);
}
