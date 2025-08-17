// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import LogoLight from "../assets/logo-light.svg";
import { ChevronDown } from "lucide-react";

export default function LogoIntro() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("hero");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-background dark:bg-secondary relative">
      {/* Logo with animation */}
      <motion.img
        src={LogoLight}
        alt="GraphicRoom Logo"
        className="w-48 md:w-64"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Scroll down indicator */}
      <motion.div
        className="absolute bottom-10 flex flex-col items-center text-gray-600 dark:text-gray-300 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        onClick={scrollToNext}
      >
        <ChevronDown size={32} />
        <span className="text-sm mt-1">Scroll</span>
      </motion.div>
    </section>
  );
}
