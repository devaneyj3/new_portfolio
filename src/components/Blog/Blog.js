"use client";
import React from "react";

import classes from "./Blog.module.scss";
import Link from "next/link";
import { useBlogContext } from "@/context/BlogContext";

export default function Blog() {
	const { articles } = useBlogContext();

	return (
		<div className={classes.container}>
			<div className={classes.header}>
				<h1>Latest News</h1>
				<p>
					Keep up with my latest discoveries and insights in the tech world.
				</p>
			</div>
			<div className={classes.posts}>
				{articles && articles.length > 0 ? (
					articles.map((post, index) => {
						const { fields } = post;
						const readableDate = new Date(fields.publishedDate).toDateString();
						console.log("post", fields);
						return (
							<div key={index} className={classes.post}>
								<Link href={`Blog/${fields.slug}`}>
									<h2>{fields.title}</h2>
									<p>{readableDate}</p>
								</Link>
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
