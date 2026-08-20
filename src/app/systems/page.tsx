import Navigation from "@/components/Navigation";
import SystemsExperiments from "@/components/SystemsExperiments";
import Footer from "@/components/Footer";

export default function SystemsPage() {
  return (
    <main>
      <Navigation />
      <div className="pt-24">
        <SystemsExperiments />
      </div>
      <Footer />
    </main>
  );
}
