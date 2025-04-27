import React from "react";
import styles from "./Education.module.scss";
import EducationCol from "./EducationCol/EducationCol";

const text =
	"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
export default function Education() {
	return (
		<div className={styles.education_container}>
			<h1>Experience & Education</h1>
			<div className={styles.ed_ex_list}>
				<div className={styles.list}>
					<EducationCol title="Edu" text={text} />
					<EducationCol title="Edu" text={text} />
				</div>
			</div>
		</div>
	);
}
