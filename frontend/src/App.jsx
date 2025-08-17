import LogoIntro from "./components/LogoIntro";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Intro Section with Logo */}
      <LogoIntro />

      {/* Hero Section */}
      <section
        id="hero"
        className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800"
      >
        <h1 className="text-4xl font-bold">
          Welcome to <span className="text-primary">GraphicRoom</span> 🚀
        </h1>
      </section>
    </div>
  );
}

export default App;
