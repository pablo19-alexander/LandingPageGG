import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import ScrollBackground from './components/ScrollBackground';

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-dark)] relative">
      <ScrollBackground />

      <div className="relative z-10">
        <Navbar />

        <main>
          <Hero />
          <Features />
          <Showcase />
          <CallToAction />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
