"use client";
import React from "react";
import styles from "./NotFound.module.scss";

import { useRouter } from "next/navigation";

const NotFoundPage = () => {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>404</h1>
			<p className={styles.subtitle}>Oops! Page Not Found</p>
			<p className={styles.description}>
				We couldn't find the page you were looking for. Perhaps you've mistyped
				the URL, or it no longer exists.
			</p>
			<button
				className={styles.button}
				onClick={() => {
					router.back();
				}}>
				Go Back to Previous Page
			</button>
		</div>
	);
};

export default NotFoundPage;
