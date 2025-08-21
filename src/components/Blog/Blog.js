"use client";
import React from "react";

import classes from "./Blog.module.scss";
import Link from "next/link";
import { useBlogContext } from "@/context/BlogContext";

export default function Blog() {
	const { articles } = useBlogContext();

	// Calculate word count
	const calculateWordCount = (content) => {
		if (!content?.content) return 0;
		return (
			content.content.reduce((count, item) => {
				return (
					count +
					(item.content?.reduce((itemCount, content) => {
						const words = content.value
							? content.value.trim().split(/\s+/).filter(Boolean)
							: [];
						return itemCount + words.length;
					}, 0) || 0)
				);
			}, 0) || 0
		);
	};

	return (
		<div className={classes.container}>
			<div className={classes.header}>
				<h1 className={classes.mainTitle}>Latest News & Insights</h1>
				<p className={classes.subtitle}>
					Keep up with my latest discoveries and insights in the tech world.
				</p>
				<div className={classes.headerDecoration}></div>
			</div>

			<div className={classes.posts}>
				{articles && articles.length > 0 ? (
					articles.map((post, index) => {
						const { fields } = post;
						const readableDate = new Date(fields.publishedDate).toDateString();
						const wordCount = calculateWordCount(fields.content);
						const readingTime = Math.ceil(wordCount / 200);

						return (
							<article key={index} className={classes.post}>
								<Link href={`Blog/${fields.slug}`} className={classes.postLink}>
									<div className={classes.postHeader}>
										<h2 className={classes.postTitle}>{fields.title}</h2>
										<div className={classes.postMeta}>
											<span className={classes.postDate}>{readableDate}</span>
											<span className={classes.readingTime}>
												{wordCount} words · ~{readingTime} min read
											</span>
										</div>
									</div>

									{fields.excerpt && (
										<p className={classes.postExcerpt}>{fields.excerpt}</p>
									)}

									<div className={classes.postFooter}>
										<div className={classes.tags_container}>
											{fields.tags &&
												fields.tags.map((tag, tagIndex) => (
													<div className={classes.tag_container} key={tagIndex}>
														<span className={classes.tag}>{tag}</span>
													</div>
												))}
										</div>
										<div className={classes.readMore}>
											<span>Read More →</span>
										</div>
									</div>
								</Link>
							</article>
						);
					})
				) : (
					<div className={classes.noPosts}>
						<h2>No Posts Yet</h2>
						<p>Check back soon for new content!</p>
					</div>
				)}
			</div>
		</div>
	);
}
