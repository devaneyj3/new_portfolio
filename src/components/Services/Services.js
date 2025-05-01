import React from "react";
import styles from "./Services.module.scss";
import { Code, Rocket, Search, Smartphone } from "lucide-react"; // Example icons

const services = [
	{
		icon: <Code size={32} />,
		title: "Web Development",
		description: "Modern, responsive websites built for speed and scalability.",
		link: "/services/web-development",
	},
	{
		icon: <Search size={32} />,
		title: "SEO Optimization",
		description:
			"Improve your visibility on search engines with proven strategies.",
		link: "/services/seo",
	},
	{
		icon: <Rocket size={32} />,
		title: "Performance Tuning",
		description:
			"Boost load times and Core Web Vitals for better user experience.",
		link: "/services/performance",
	},
	{
		icon: <Smartphone size={32} />,
		title: "Mobile Optimization",
		description: "Ensure your site works great on all screen sizes.",
		link: "/services/mobile",
	},
];
export default function Services() {
	return (
		<div className={styles.services}>
			<div className={styles.services_container}>
				<h1 className={styles.section_title}>My Services</h1>
				<div className={styles.skills}>
					{services.map((service) => {
						return (
							<div className={styles.skill} key={service.title}>
								{service.icon}
								<h1>{service.title}</h1>
								<p>{service.description}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
