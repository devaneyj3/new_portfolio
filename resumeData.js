import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export const resumeData = {
	name: "Jordan Devaney",
	occupation: "Full Stack Web Developer",
	description:
		"I have a strong desire to be a productive member of a team environment that fosters learning, growth, and develop a great product for the user",
	bio: `
		<p>I am a <strong>Full Stack Web Developer</strong> passionate about solving <strong>complex coding challenges</strong> and creating <strong>high-performing, visually appealing websites</strong> that drive results and benefit clients.</p>
		<p>With a strong focus on <strong>responsive design, user experience (UX), and seamless functionality</strong>, I am committed to delivering web solutions that align with your business goals.</p>
		<p>My expertise spans both front-end and back-end development, ensuring your website is not only beautiful but also efficient and secure.</p>
		<p>I am determined to bring your vision to life by leveraging modern technologies and best practices in <strong>web development</strong>.</p>
		<p>Whether you need to build a custom website, optimize performance, or enhance functionality, I am here to serve you with precision and creativity.</p>
		<p>Let’s work together to develop a web solution that meets your needs and exceeds expectations.</p>
		<p><strong>Contact me today</strong> to start creating a website that will elevate your online presence!</p>
	`,
	email: "jordandevaney28@gmail.com",
	phone: "810-772-0086",
	address: {
		street: "351 Emerald Ct E",
		city: "Whitmore Lake",
		state: "Michigan",
		zip: 48189,
	},

	resume: {
		skillmessage:
			"I have developed superb in-demand programming skills through BloomTech (AKA Lambda School), Western Governors University, as well as from various Udemy and other Massive Open Online Courses (MOOCs)",

		skills: [
			{
				name: "JavaScript",
				level: "70%",
			},
			{
				name: "Next JS",
				level: "70%",
			},
			{
				name: "Python",
				level: "55%",
			},
			{
				name: "ReactJS",
				level: "80%",
			},
			{
				name: "SCSS",
				level: "60%",
			},
			{
				name: "HTML5",
				level: "80%",
			},
			{
				name: "SQL",
				level: "70%",
			},
			{
				name: "Node",
				level: "80%",
			},
			{
				name: "AWS",
				level: "50%",
			},
		],
	},
	portfolio: {
		personal_projects: [
			{
				title: "Budget App",
				category: "A Next.js App",
				image: "budget.jpg",
				url: "https://next-budget-eta.vercel.app/",
			},
			{
				title: "Github Users",
				category:
					"Utilized React, Context API, GitHub API and Fusion Charts to display stats of searched user account.",
				image: "github.png",
				url: "https://search-github-users54.netlify.app/",
			},
		],
		client_projects: [
			{
				title: "AG-USA",
				category: "Main website for AG-USA.",
				image: "agusa.webp",
				url: "https://agusa.life",
			},
			{
				title: "EdenRich",
				category: "Landing page for an AG-USA product to sell in stores.",
				image: "edenrich.png",
				url: "https://edenrich.life",
			},
			{
				title: "Max Goodness",
				category: "Sales website created for Max-Well a subsidary of AG-USA",
				image: "maxgoodness.png",
				url: "https://max-well-yv93-devaneyj3s-projects.vercel.app/",
			},
			{
				title: "Goshen Hill Rental",
				category: "Summer Rental Home Vacation Website.",
				image: "goshen.png",
				url: "https://phillipsjt71.wixsite.com/goshen-hill-rentals",
			},
		],
	},
};
