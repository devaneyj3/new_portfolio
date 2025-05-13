import React from "react";
import styles from "./Article.module.scss";

const Article = ({ slug }) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>We're Brewing Something Special!</h1>
			<p className={styles.message}>
				The page for {slug} is currently under construction. I'm working hard to
				bring you an amazing experience. Stay tuned for updates!
			</p>
		</div>
	);
};

export default Article;
