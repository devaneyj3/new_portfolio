import React from "react";
import styles from "./projects.module.scss";
import Project from "./Project/Project";
import CustomCarousel from "./sample";

export default function Projects() {
	return (
		<div className={styles.projects_container}>
			<div className={styles.intro}>
				<h1>Projects</h1>
				<p>I love contributing my skills to help buisnesses grow!</p>
			</div>
			<CustomCarousel />
		</div>
	);
}
