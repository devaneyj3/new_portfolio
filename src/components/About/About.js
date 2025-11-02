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
				<h1 className={styles.greeting}>Hi, I'm Jordan</h1>
				<p className={styles.tagline}>
					Full-stack developer crafting digital solutions that drive results
				</p>
				<div className={styles.story}>
					<p>
						Every business needs a digital presence that not only looks great
						but
						<strong> converts visitors into customers</strong>. That's where I
						come in. I'm a full-stack web developer with a passion for solving
						complex challenges and creating high-performing websites that make a
						difference.
					</p>
					<p>
						With expertise spanning from modern front-end frameworks to robust
						back-end systems, I transform your vision into reality using
						cutting-edge technologies and proven best practices. Whether you
						need a complete digital transformation or optimization of your
						existing site, I deliver solutions that elevate your online presence
						and drive measurable growth.
					</p>
				</div>
			</div>
		</div>
	);
}
