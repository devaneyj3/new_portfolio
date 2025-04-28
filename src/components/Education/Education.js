import React from "react";
import styles from "./Education.module.scss";
import EducationBox from "./EducationBox/EducationBox";
import { EDUCATION_EXPERIENCE } from "../../../data/education_experience";

export default function Education() {
	return (
		<div className={styles.education_container}>
			<h1>Experience & Education</h1>
			<div className={styles.ed_ex_list}>
				{EDUCATION_EXPERIENCE.map((item, index) => (
					<EducationBox
						key={index}
						icon={item.icon}
						title={
							item.company ? `${item.title} @ ${item.company}` : item.degree
						}
						text={item.description && item.description}
						date={item.years}
					/>
				))}
			</div>
		</div>
	);
}
