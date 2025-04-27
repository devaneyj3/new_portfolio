import React from "react";
import EducationBox from "../EducationBox/EducationBox";
import styles from "./EducationCol.module.scss";

export default function EducationCol({ title, text }) {
	return (
		<div className={styles.column}>
			<EducationBox title={title} text={text} />
			<EducationBox title={title} text={text} />
			<EducationBox title={title} text={text} />
		</div>
	);
}
