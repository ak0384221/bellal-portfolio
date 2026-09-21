import { frontendTech, contacts, projects, certificates } from "@/app/data";
import Header from "@/app/(home)/components/Header";
import HeroSection from "@/app/(home)/components/HeroSection";
import TechSection from "@/app/(home)/components/TechSection";
import WorkflowSection from "@/app/(home)/components/new";
import ProjectsSection from "@/app/(home)/components/ProjectsSection";
import CertificatesSection from "@/app/(home)/components/CertificatesSection";
import Footer from "@/app/(home)/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto p-5">
        <Header />
        <HeroSection />

        <br />
        <br />
        <br />

        <TechSection frontendTech={frontendTech} />
        <WorkflowSection />
        <ProjectsSection projects={projects} />
        <CertificatesSection certificates={certificates} />
        <Footer contacts={contacts} />
      </div>
    </div>
  );
}
