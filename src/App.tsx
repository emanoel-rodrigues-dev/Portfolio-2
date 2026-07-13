import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Recommendations } from './components/Recommendations';
import { Availability } from './components/Availability';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="container">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Recommendations />
        <Availability />
      </main>
      <Footer />
    </>
  );
}

export default App;
