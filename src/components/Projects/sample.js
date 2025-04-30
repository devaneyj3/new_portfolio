"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { CLIENT_PROJECTS } from "../../../data/projects.data";
import styles from "./sample.module.scss";

export default function CustomCarousel() {
	const containerRef = useRef();

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
				{CLIENT_PROJECTS.map((project, index) => (
					<div className={styles.slide} key={index}>
						<Image
							src={project.image}
							alt={`Slide ${index + 1}`}
							width={800}
							height={400}
							className={styles.slideImage}
						/>
						<div className={styles.info}>
							<h1>{project.title}</h1>
							<p>{project.category}</p>
						</div>
					</div>
				))}
			</div>

			<button onClick={() => scroll("right")} className={styles.navButton}>
				→
			</button>
		</div>
	);
}
