import { frontendTech, contacts, projects } from "@/app/data";
import Header from "@/app/(home)/components/Header";
import HeroSection from "@/app/(home)/components/HeroSection";
import TechSection from "@/app/(home)/components/TechSection";
import AboutSection from "@/app/(home)/components/AboutSection";
import WorkflowSection from "@/app/(home)/components/new";
import ProjectsSection from "@/app/(home)/components/ProjectsSection";
import Footer from "@/app/(home)/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto  p-5">
        {/* Header Section */}
        <Header />

        {/* Hero Section */}
        <HeroSection />
        {/* About Section */}
        {/* <AboutSection /> */}
        <br />
        <br />
        <br />

        {/* Tech Stack Section */}
        <TechSection frontendTech={frontendTech} />

        {/* Workflow Section */}
        <WorkflowSection />

        {/* Projects Section */}
        <ProjectsSection projects={projects} />

        {/* Footer / Contact Section */}
        <Footer contacts={contacts} />
      </div>
    </div>
  );
}
