import React from "react";
import styles from "./EducationBox.module.scss";

export default function EducationBox({ title, text, date, icon }) {
	return (
		<div className={styles.ed_box}>
			<div className={styles.date_box}>
				<p>{date}</p>
			</div>
			<div className={styles.icon}>{icon}</div>
			<h1>{title}</h1>
			<ul>
				{text &&
					text.map((desc, index) => {
						return <li key={index}>{desc}</li>;
					})}
			</ul>
		</div>
	);
}
