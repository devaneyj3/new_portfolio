"use client"; // if you're using Next.js App Router

import React, { useState } from "react";
import styles from "./Nav.module.scss";
import Link from "next/link";

export default function Nav({ navItems }) {
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
					{navItems.map((item) => (
						<li key={item.label}>
							<Link href={item.href} aria-label={`Go to ${item.label} section`}>
								{item.label}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}
