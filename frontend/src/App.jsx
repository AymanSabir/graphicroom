import LogoIntro from "./components/LogoIntro";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {
  return (
    <>
    <div className="font-sans">
      {/* Logo Animation - shown first */}
      <LogoIntro />
      <Navbar />
      <Hero />
    </div>
  </>
  );
}
