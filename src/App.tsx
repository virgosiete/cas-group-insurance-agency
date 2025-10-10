import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { submitContactForm, ContactFormData } from './lib/supabase';

function App() {
  const handleContactSubmit = async (formData: ContactFormData) => {
    await submitContactForm({
      name: formData.name,
      email: formData.email,
      business_type: formData.businessType,
      message: formData.message,
    });
  };

  return (
    <div className="min-h-screen bg-brand-offWhite">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <Process />
        <Pricing />
        <Team />
        <Testimonials />
        <Contact onSubmit={handleContactSubmit} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
