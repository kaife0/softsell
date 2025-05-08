import './index.css'; // Import Tailwind styles directly
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import HowItWorks from './components/layout/HowItWorks';
import WhyChooseUs from './components/layout/WhyChooseUs';
import Testimonials from './components/layout/Testimonials';
import ContactForm from './components/layout/ContactForm';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
