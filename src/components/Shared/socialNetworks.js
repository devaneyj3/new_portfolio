import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./social.module.scss";
import Link from "next/link";
import { social } from "../../../data/social";

export default function SocialNetworks() {
	return (
		<ul className={styles.socials}>
			{social.map((network) => (
				<li key={network.name} className={styles.socialLink}>
					<Link
						href={network.url}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`Follow us on ${network.name}`}
						title={`Follow us on ${network.name}`}>
						<FontAwesomeIcon icon={network.icon} className={styles.icon} />
					</Link>
				</li>
			))}
		</ul>
	);
}
