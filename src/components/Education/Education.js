import React from "react";
import styles from "./Education.module.scss";
import EducationBox from "./EducationBox/EducationBox";
import { EDUCATION_EXPERIENCE } from "../../../data/education_experience";

export default function Education() {
	return (
		<div className={styles.education_container} id="resume">
			<h1 className={styles.section_title}>Why I'm Qualified</h1>
			<p className={styles.section_subtitle}>
				Years of experience and continuous learning fuel my ability to deliver
				exceptional results
			</p>
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
