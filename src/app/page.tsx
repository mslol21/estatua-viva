import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ClientMarquee from '@/components/ClientMarquee';
import EventCuratorship from '@/components/EventCuratorship';
import CharacterCatalog from '@/components/CharacterCatalog';
import VideoShowcase from '@/components/VideoShowcase';
import BriefingBuilder from '@/components/BriefingBuilder';
import ReviewsAndFaq from '@/components/ReviewsAndFaq';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian text-alabaster">
      <Navbar />
      <div id="conteudo" tabIndex={-1}><Hero /></div>
      <ClientMarquee />
      <EventCuratorship />
      <CharacterCatalog />
      <VideoShowcase />
      <BriefingBuilder />
      <ReviewsAndFaq />
      <Footer />
    </main>
  );
}

