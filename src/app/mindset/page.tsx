import Navigation from "@/components/Navigation";
import EngineeringMindset from "@/components/EngineeringMindset";
import Footer from "@/components/Footer";

export default function MindsetPage() {
  return (
    <main>
      <Navigation />
      <div className="pt-24">
        <EngineeringMindset />
      </div>
      <Footer />
    </main>
  );
}
