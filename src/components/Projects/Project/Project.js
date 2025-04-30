import React from "react";
import styles from "./Project.module.scss";
import Image from "next/image";

export default function Project({ project }) {
	const { title, image, url, category } = project;
	return (
		<div className={styles.project}>
			<Image
				className={styles.project_image}
				src={image}
				width={500}
				height={500}
				alt={title}
			/>
			<div className={styles.info}>
				<h1>{title}</h1>
				<p>{category}</p>
			</div>
		</div>
	);
}
