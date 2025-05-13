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
			<div className={classes.header}>
				<h1>Latest News</h1>
				<p>
					Keep up with my latest discoveries and insights in the tech world.
				</p>
			</div>
			<div className={classes.posts}>
				{posts && posts.length > 0 ? (
					posts.map((post, index) => {
						const { fields } = post;
						const readableDate = new Date(fields.publishedDate).toDateString();
						console.log("post", fields);
						return (
							<div key={index} className={classes.post}>
								<h2>{fields.title}</h2>
								<p>{fields.publishedDate}</p>
								<div className={classes.tags_container}>
									{fields.tags.map((tag, index) => {
										return (
											<div className={classes.tag_container} key={index}>
												<p className={classes.tag}>{tag}</p>
											</div>
										);
									})}
								</div>
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
