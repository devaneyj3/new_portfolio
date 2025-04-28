"use client"; // if you're using Next.js App Router

import React, { useState } from "react";
import styles from "./Nav.module.scss";
import Link from "next/link";

export default function Nav() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className={styles.nav}>
			<div className={styles.nav_container}>
				<div className={styles.hamburger} onClick={toggleMenu}>
					{isOpen ? "✖" : "☰"}
				</div>

				<ul className={`${styles.nav_links} ${isOpen ? styles.active : ""}`}>
					<li className={styles.current}>
						<Link href="#home" aria-label="Go to Home section">
							Home
						</Link>
					</li>
					<li>
						<Link href="#about" aria-label="Go to About section">
							About
						</Link>
					</li>
					<li>
						<Link href="#services" aria-label="Go to Services section">
							Services
						</Link>
					</li>
					<li>
						<Link href="#resume" aria-label="Go to Resume section">
							Resume
						</Link>
					</li>
					<li>
						<Link href="#portfolio" aria-label="Go to Works section">
							Works
						</Link>
					</li>
					<li>
						<Link href="#contact" aria-label="Go to Contact section">
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
