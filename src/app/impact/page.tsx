import Navigation from "@/components/Navigation";
import ImpactMetrics from "@/components/ImpactMetrics";
import Footer from "@/components/Footer";

export default function ImpactPage() {
  return (
    <main>
      <Navigation />
      <div className="pt-24">
        <ImpactMetrics />
      </div>
      <Footer />
    </main>
  );
}
