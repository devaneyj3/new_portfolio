import React from "react";
import styles from "./Nav.module.scss";
import Link from "next/link";
import RadiantButton from "../RadiantButton/RadiantButton";

export default function Nav() {
	return (
		<nav className={styles.nav}>
			<ul>
				<li className={styles.current}>
					<Link
						className={styles.smoothscroll}
						href="#home"
						aria-label="Go to Home section">
						Home
					</Link>
				</li>
				<li>
					<Link
						className={styles.smoothscroll}
						href="#about"
						aria-label="Go to About section">
						About
					</Link>
				</li>
				<li>
					<Link
						className={styles.smoothscroll}
						href="#services"
						aria-label="Go to Services section">
						Services
					</Link>
				</li>
				<li>
					<Link
						className={styles.smoothscroll}
						href="#resume"
						aria-label="Go to Resume section">
						Resume
					</Link>
				</li>
				<li>
					<Link
						className={styles.smoothscroll}
						href="#portfolio"
						aria-label="Go to Works section">
						Works
					</Link>
				</li>
				<li>
					<RadiantButton text="Contact" className={styles.nav_btn} />
				</li>
			</ul>
		</nav>
	);
}
