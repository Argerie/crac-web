import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import QuienesSomosSection from './components/sections/QuienesSomosSection';
import TeamCardsSection from './components/sections/TeamCardsSection';
import ImageCarouselGallery from './components/sections/ImageCarouselGallery';
import AnimalProfiles from './components/sections/AnimalProfiles';
import VolunteersSection from './components/sections/VolunteersSection';
import HospitalSection from './components/sections/HospitalSection';
import HabitacionSection from './components/sections/HabitacionSection';
import VisitanosSection from './components/sections/VisitanosSection';
import VisitFormSection from './components/sections/VisitFormSection';
import GirasEducativasSection from './components/sections/GirasEducativasSection';
import VolunteerFormSection from './components/sections/VolunteerFormSection';
import DonationWidget from './components/sections/DonationWidget';
import FAQSection from './components/sections/FAQSection';

function App() {
  return (
    <>
      <Nav />
      <HeroSection />
      <TeamCardsSection />
      <QuienesSomosSection />
      <AnimalProfiles />
      <VolunteersSection />
      <HospitalSection />
      <ImageCarouselGallery />
      <HabitacionSection />
      <VisitanosSection />
      <VisitFormSection />
      <GirasEducativasSection />
      <section id="VoluntariadoForm" className="mx-auto max-w-5xl flex flex-col items-center px-6 py-12 bg-mist-50">
        <VolunteerFormSection />
        <div className="mt-6 flex justify-center">
          <DonationWidget />
        </div>
      </section>
      <FAQSection />
      <Footer />
    </>
  );
}

export default App;
