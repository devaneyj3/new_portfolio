import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Education from "@/components/Education/Education";
import Projects from "@/components/Projects/projects";
import Services from "@/components/Services/Services";
import Nav from "@/components/Nav/Nav";
const navItems = [
	{ label: "About", href: "#about" },
	{ label: "Services", href: "#services" },
	{ label: "Education", href: "#education" },
	{ label: "Projects", href: "#projects" },
	{ label: "Blog", href: "/blog" },
	{ label: "Contact", href: "#contact" },
];
export default function Home() {
	return (
		<>
			<Nav navItems={navItems} />
			<About />
			<Services />
			<Education />
			<Projects />
			<Contact />
		</>
	);
}
