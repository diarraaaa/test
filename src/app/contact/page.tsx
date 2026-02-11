import Contact from "@/src/components/Contact";
import MainHeader from "@/src/components/MainHeader";
import Footer from "@/src/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-black/95 dark:bg-black">
      <MainHeader />
      <Contact />
      <Footer />
    </main>
  );
}

