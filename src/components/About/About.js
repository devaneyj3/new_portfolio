import React from "react";
import styles from "./About.module.scss";
import Image from "next/image";
import me from "../../../public/me.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer, faKeyboard } from "@fortawesome/free-solid-svg-icons";

export default function About() {
	return (
		<div className={styles.container}>
			<div className={styles.pic_container}>
				<div className={styles.name_container}>
					<p>Hello, I am Jordan</p>
				</div>
				<Image
					className={styles.logo}
					src={me}
					height={400}
					width={270}
					alt="Logo"
				/>
				<div className={styles.icons}>
					<FontAwesomeIcon icon={faComputer} className={styles.icon} />
					<FontAwesomeIcon icon={faKeyboard} className={styles.icon} />
				</div>
			</div>
			<div className={styles.about}>
				<h1>About Me</h1>
				<p>
					A full-stack web developer passionate about solving complex coding
					challenges and creating high-performing, visually appealing websites
					focused on responsive design, user experience, and seamless
					functionality. Expertise in both front-end and back-end development,
					committed to bringing your vision to life using modern technologies
					and best practices. Offers services for custom website development,
					performance optimization, and functionality enhancement. Contact for a
					web solution to elevate your online presence.
				</p>
			</div>
		</div>
	);
}
