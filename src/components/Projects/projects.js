"use client";
import React, { useState } from "react";
import styles from "./projects.module.scss";
import CustomCarousel from "./Project/Project";
import { CLIENT_PROJECTS } from "../../../data/projects.data";

export default function Projects() {
	const [activeProjectIndex, setActiveProjectIndex] = useState(0);

	return (
		<div className={styles.projects_container}>
			<div className={styles.intro}>
				<h1>Projects</h1>
			</div>
			<p>
				I have helped many clients grow there buisnesses and generate profit,
				and I am ready to help you too. Just look at some of my past projects.
			</p>
			<div className={styles.project_nav}>
				<ul>
					{CLIENT_PROJECTS.map((project, index) => {
						return (
							<div key={index}>
								<li
									className={activeProjectIndex == index ? styles.active : null}
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
			<CustomCarousel index={activeProjectIndex} />
		</div>
	);
}
