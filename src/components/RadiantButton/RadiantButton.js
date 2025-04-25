import React from "react";
import styles from "./RadiantButton.module.scss";

export default function RadiantButton({ text, className }) {
	return (
		<button
			className={`${styles.contactBtn} ${className}`}
			aria-label="Go to Contact section">
			{text}
		</button>
	);
}
