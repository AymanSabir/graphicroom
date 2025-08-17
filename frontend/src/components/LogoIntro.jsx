import { useEffect, useState } from "react";
import logoLight from "../assets/logo-light.svg"; // make sure your logo is placed in src/assets/

export default function LogoIntro() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Trigger fade-out after 3.5s
    const timer = setTimeout(() => setFadeOut(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-1000 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <img
        src={logoLight}
        alt="GraphicRoom Logo"
        className="w-72 md:w-[28rem] lg:w-[32rem] opacity-0 fade-in-up"
      />
    </div>
  );
}
