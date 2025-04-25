import React from "react";
import styles from "./Header.module.scss";
import RadiantButton from "../RadiantButton/RadiantButton";

export default function Header() {
	return (
		<div className={styles.header}>
			<div className={styles.welcomeBox}>
				<h1>Let Me Take Care Of You.</h1>
				<RadiantButton text="My Services" className={styles.header_btn} />
			</div>
		</div>
	);
}
