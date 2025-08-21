"use client";
import ArticleLayout from "@/components/ArticleLayout/ArticleLayout";
import { useBlogContext } from "@/context/BlogContext";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import classes from "./Blog.module.scss";

export default function ArticlePage() {
	const { articles } = useBlogContext();
	const { slug } = useParams();

	const [article, setArticle] = useState(null);

	useEffect(() => {
		if (articles && slug) {
			const found = articles.find((article) => article.fields.slug === slug);
			if (found) {
				setArticle(found);
			}
		}
	}, [articles, slug]);

	if (!article)
		return (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "100vh",
					fontSize: "2rem",
					color: "#666",
				}}>
				Loading article...
			</div>
		);

	const readableDate = new Date(article.fields.publishedDate).toDateString();

	// Calculate reading time (rough estimate: 200 words per minute)
	const wordCount =
		article.fields.content?.content?.reduce((count, item) => {
			return (
				count +
				(item.content?.reduce((itemCount, content) => {
					return itemCount + (content.value?.split(" ").length || 0);
				}, 0) || 0)
			);
		}, 0) || 0;

	const readingTime = Math.ceil(wordCount / 200);

	return (
		<ArticleLayout>
			<div className={classes.contentWrapper}>
				<div className={classes.metaSection}>
					<h1 className={classes.title}>{article.fields.title}</h1>
					<p className={classes.date}>{readableDate}</p>
					<p className={classes.readingTime}>
						{wordCount} words · ~{readingTime} min read
					</p>
				</div>

				<div className={classes.articleContent}>
					{article.fields.content &&
						article.fields.content.content.map((items, index) => {
							let styles = null;
							let elementType = "div";

							switch (items.nodeType) {
								case "paragraph":
									styles = classes.paragraph;
									elementType = "p";
									break;
								case "heading-3":
									styles = classes.heading;
									elementType = "h3";
									break;
								case "heading-2":
									styles = classes.heading;
									elementType = "h2";
									break;
								case "heading-1":
									styles = classes.heading;
									elementType = "h1";
									break;
								default:
									styles = classes.paragraph;
									elementType = "p";
							}

							return (
								<div key={index}>
									{items.content.map((item, itemIndex) => {
										const { value, marks } = item;

										// Handle different text marks (bold, italic, etc.)
										let finalStyles = styles;
										if (marks && marks.length > 0) {
											marks.forEach((mark) => {
												switch (mark.type) {
													case "bold":
														finalStyles = `${styles} ${classes.strong}`;
														break;
													case "italic":
														finalStyles = `${styles} ${classes.em}`;
														break;
													default:
														break;
												}
											});
										}

										return (
											<div key={itemIndex}>
												{elementType === "p" ? (
													<p className={finalStyles}>{value}</p>
												) : elementType === "h1" ? (
													<h1 className={finalStyles}>{value}</h1>
												) : elementType === "h2" ? (
													<h2 className={finalStyles}>{value}</h2>
												) : elementType === "h3" ? (
													<h3 className={finalStyles}>{value}</h3>
												) : (
													<div className={finalStyles}>{value}</div>
												)}
											</div>
										);
									})}
								</div>
							);
						})}
				</div>
			</div>
		</ArticleLayout>
	);
}
