import React from "react";
import classes from "./ArticleLayout.module.scss";

export default function ArticleLayout({ children }) {
	return <div className={classes.article_layout}>{children}</div>;
}
