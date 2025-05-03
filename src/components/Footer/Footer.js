import React from "react";
import styles from "./footer.module.scss"; // Ensure the path is correct
import Link from "next/link";
import SocialNetworks from "../Shared/socialNetworks";

const Footer = () => {
	return (
		<footer className={styles.footer} aria-label="Footer">
			<div className={styles.row}>
				<div className={styles.columns}>
					<SocialNetworks />
					<ul className={styles.copyRight}>
						<li>&copy; 2021-2025 Jordan Devaney</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
