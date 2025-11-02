"use client";
import React, { useState } from "react";
import styles from "./projects.module.scss";
import CustomCarousel from "./Project/Project";
import { CLIENT_PROJECTS } from "../../../data/projects.data";

export default function Projects() {
	const [activeProjectIndex, setActiveProjectIndex] = useState(0);

	return (
		<div className={styles.projects_container} id="portfolio">
			<div className={styles.intro}>
				<h1 className={styles.section_title}>See My Work</h1>
				<p className={styles.section_subtitle}>
					Real results for real businesses. Each project delivered measurable
					impact and helped clients achieve their goals.
				</p>
			</div>
			<div className={styles.project_nav}>
				<ul>
					{CLIENT_PROJECTS.map((project, index) => {
						return (
							<div key={index}>
								<li
									className={activeProjectIndex === index ? styles.active : ""}
									onClick={() => setActiveProjectIndex(index)}>
									<span className={styles.index}>{index + 1}</span>
									<span>{project.title}</span>
									<hr className={styles.bar} />
								</li>
							</div>
						);
					})}
				</ul>
			</div>
			<CustomCarousel
				index={activeProjectIndex}
				onIndexChange={setActiveProjectIndex}
			/>
		</div>
	);
}
