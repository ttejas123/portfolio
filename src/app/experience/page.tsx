import Navigation from "@/components/Navigation";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Footer from "@/components/Footer";

export default function ExperiencePage() {
  return (
    <main>
      <Navigation />
      <div className="pt-24">
        <ExperienceTimeline />
      </div>
      <Footer />
    </main>
  );
}
