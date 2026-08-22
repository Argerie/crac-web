import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import MissionStatement from './components/sections/MissionStatement';
import TeamCardsSection from './components/sections/TeamCardsSection';
import ImageCarouselGallery from './components/sections/ImageCarouselGallery';
import AnimalProfiles from './components/sections/AnimalProfiles';
import TestimonialCarousel from './components/sections/TestimonialCarousel';
import VolunteersSection from './components/sections/VolunteersSection';
import VolunteerFormSection from './components/sections/VolunteerFormSection';
import DonationWidget from './components/sections/DonationWidget';
import FAQSection from './components/sections/FAQSection';

function App() {
  return (
    <>
      <Nav />
      <HeroSection />
      <MissionStatement />
      <TeamCardsSection />
      <ImageCarouselGallery />
      <AnimalProfiles />
      <TestimonialCarousel />
      <VolunteersSection />
      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 py-12 md:grid-cols-2">
        <VolunteerFormSection />
        <DonationWidget />
      </section>
      <FAQSection />
      <Footer />
    </>
  );
}

export default App;
