import About from "@/components/About/About";
import Education from "@/components/Education/Education";
import Header from "@/components/Header/Header";
import Projects from "@/components/Projects/projects";
import Services from "@/components/Services/Services";

export default function Home() {
	return (
		<>
			<About />
			<Services />
			<Education />
			<Projects />
		</>
	);
}
