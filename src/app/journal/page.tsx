import Navigation from "@/components/Navigation";
import EngineeringJournal from "@/components/EngineeringJournal";
import Footer from "@/components/Footer";

export default function JournalPage() {
  return (
    <main>
      <Navigation />
      <div className="pt-24">
        <EngineeringJournal />
      </div>
      <Footer />
    </main>
  );
}
