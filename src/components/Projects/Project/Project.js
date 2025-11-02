"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CLIENT_PROJECTS } from "../../../../data/projects.data";
import styles from "./Project.module.scss";
import Link from "next/link";

export default function CustomCarousel({ index, onIndexChange }) {
	const containerRef = useRef();
	const [isScrolling, setIsScrolling] = useState(false);

	// Scroll to specific index when index prop changes
	useEffect(() => {
		if (typeof index === "number" && !isScrolling) {
			const container = containerRef.current;
			if (!container) return;

			const slides = container.querySelectorAll(`.${styles.slide}`);
			const slide = slides?.[index];
			if (slide) {
				setIsScrolling(true);
				const slideWidth = slide.offsetWidth;
				const targetScroll = slideWidth * index;

				container.scrollTo({
					left: targetScroll,
					behavior: "smooth",
				});

				setTimeout(() => setIsScrolling(false), 500);
			}
		}
	}, [index, isScrolling]);

	// Detect which slide is visible and update index
	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const handleScroll = () => {
			// Only handle scroll events when not programmatically scrolling
			if (isScrolling) return;

			const slides = container.querySelectorAll(`.${styles.slide}`);
			if (slides.length === 0) return;

			const containerRect = container.getBoundingClientRect();
			const containerCenter = containerRect.left + containerRect.width / 2;

			let closestIndex = 0;
			let closestDistance = Infinity;

			slides.forEach((slide, i) => {
				const slideRect = slide.getBoundingClientRect();
				const slideCenter = slideRect.left + slideRect.width / 2;
				const distance = Math.abs(slideCenter - containerCenter);

				if (distance < closestDistance) {
					closestDistance = distance;
					closestIndex = i;
				}
			});

			if (closestIndex !== index && onIndexChange) {
				onIndexChange(closestIndex);
			}
		};

		// Only listen to scroll on the carousel container, not window
		container.addEventListener("scroll", handleScroll, { passive: true });
		return () => container.removeEventListener("scroll", handleScroll);
	}, [index, isScrolling, onIndexChange]);

	const scroll = (direction) => {
		const container = containerRef.current;
		if (!container) return;

		const slides = container.querySelectorAll(`.${styles.slide}`);
		if (slides.length === 0) return;

		let newIndex;
		if (direction === "left") {
			newIndex = index > 0 ? index - 1 : CLIENT_PROJECTS.length - 1;
		} else {
			newIndex = index < CLIENT_PROJECTS.length - 1 ? index + 1 : 0;
		}

		const targetSlide = slides[newIndex];
		if (targetSlide && onIndexChange) {
			setIsScrolling(true);
			onIndexChange(newIndex);

			// Use scrollTo instead of scrollIntoView to avoid page scroll
			const slideWidth = targetSlide.offsetWidth;
			const targetScroll = slideWidth * newIndex;

			container.scrollTo({
				left: targetScroll,
				behavior: "smooth",
			});

			setTimeout(() => setIsScrolling(false), 500);
		}
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
