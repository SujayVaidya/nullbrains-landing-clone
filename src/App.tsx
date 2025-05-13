import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import InfoSections from "./components/InfoSections";
import FeaturesGrid from "./components/FeaturesGrid";
import TeamSection from "./components/TeamSection";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header />

      <main>
        <section id="home">
          <Hero />
        </section>
        <TrustedBy />
        <InfoSections />
        <section id="features">
          <FeaturesGrid />
        </section>
        <TeamSection />
        <section id="blog">
          <BlogSection />
        </section>
      </main>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}

export default App;
