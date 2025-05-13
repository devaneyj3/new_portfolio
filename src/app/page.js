import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Education from "@/components/Education/Education";
import Nav from "@/components/Nav/Nav";
import Projects from "@/components/Projects/projects";
import Services from "@/components/Services/Services";

export default function Home() {
	return (
		<>
			<Nav />
			<About />
			<Services />
			<Education />
			<Projects />
			<Contact />
		</>
	);
}
