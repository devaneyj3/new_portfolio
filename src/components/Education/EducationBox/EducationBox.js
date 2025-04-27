import React from "react";
import styles from "./EducationBox.module.scss";

export default function EducationBox({ title, text }) {
	return (
		<div className={styles.ed_box}>
			<h1>{title}</h1>
			<p>{text}</p>
		</div>
	);
}
