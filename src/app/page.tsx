import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ImpactMetrics from "@/components/ImpactMetrics";
import EngineeringMindset from "@/components/EngineeringMindset";
import SystemsExperiments from "@/components/SystemsExperiments";
import ArchitecturePlayground from "@/components/ArchitecturePlayground";
import EngineeringJournal from "@/components/EngineeringJournal";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <div className="section-divider" />
      <ImpactMetrics />
      <div className="section-divider" />
      <EngineeringMindset />
      <div className="section-divider" />
      <SystemsExperiments />
      <div className="section-divider" />
      <ArchitecturePlayground />
      <div className="section-divider" />
      <EngineeringJournal />
      <div className="section-divider" />
      <ExperienceTimeline />
      <Footer />
    </main>
  );
}
