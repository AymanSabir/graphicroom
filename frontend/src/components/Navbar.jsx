import logoLight from "../assets/logo-light.svg";
import logoDark from "../assets/logo-dark.svg";

export default function Navbar() {
  // pick one version for now — light or dark
  const darkMode = true; // set to false if you want light logo

  return (
    <nav className="sticky top-0 z-50 bg-black text-white px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src={darkMode ? logoDark : logoLight}
          alt="GraphicRoom Logo"
          className="h-10"
        />
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex space-x-6 text-sm font-medium">
        <a href="#ai" className="hover:text-blue-400">AI Suite</a>
        <a href="#stock" className="hover:text-blue-400">Stock</a>
        <a href="#resources" className="hover:text-blue-400">Resources</a>
        <a href="#pricing" className="hover:text-blue-400">Pricing</a>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search assets or Start Creating"
          className="hidden md:block px-3 py-1.5 rounded-md text-black w-64"
        />
        <button className="text-sm font-medium hover:text-blue-400">Sign in</button>
      </div>
    </nav>
  );
}
