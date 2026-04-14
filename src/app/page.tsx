import MainHeader from '@/src/components/MainHeader';
import Hero from '@/src/components/Hero';
import About from '@/src/components/About';
import Services from '@/src/components/Services';
import Projects from '@/src/components/Projects';
import Contact from '@/src/components/Contact';
import Footer from '@/src/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <MainHeader />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}