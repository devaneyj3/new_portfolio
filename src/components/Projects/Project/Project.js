"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { CLIENT_PROJECTS } from "../../../../data/projects.data";
import styles from "./Project.module.scss";
import Link from "next/link";

export default function CustomCarousel({ index }) {
	const containerRef = useRef();

	// 🔥 Scroll to specific index on mount
	useEffect(() => {
		if (typeof index === "number") {
			const slides = containerRef.current?.querySelectorAll(`.${styles.slide}`);
			const slide = slides?.[index];
			if (slide) {
				slide.scrollIntoView({
					behavior: "smooth",
					inline: "center",
					block: "nearest",
				});
			}
		}
	}, [index]);

	const scroll = (direction) => {
		const container = containerRef.current;
		const slideWidth = container.offsetWidth;
		container.scrollBy({
			left: direction === "left" ? -slideWidth : slideWidth,
			behavior: "smooth",
		});
	};

	return (
		<div className={styles.carouselWrapper}>
			<button onClick={() => scroll("left")} className={styles.navButton}>
				←
			</button>

			<div className={styles.carousel} ref={containerRef}>
				{CLIENT_PROJECTS.map((project, i) => (
					<div className={styles.slide} key={i}>
						<Link href={project.url}>
							<Image
								src={project.image}
								alt={`Slide ${i + 1}`}
								width={500}
								height={500}
								className={styles.slideImage}
							/>
							<div className={styles.info}>
								<h1>{project.title}</h1>
								<p>{project.category}</p>
							</div>
						</Link>
					</div>
				))}
			</div>

			<button onClick={() => scroll("right")} className={styles.navButton}>
				→
			</button>
		</div>
	);
}
