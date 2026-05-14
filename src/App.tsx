import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

function App() {

  const [language, setLanguage] = useState<"EN" | "DE">("EN");

  return (
    <div className="bg-[#050816] min-h-screen text-white overflow-x-hidden">

      <Navbar language={language} setLanguage={setLanguage} />

      <Hero language={language} />

      <Projects language={language} />

      <Certificates language={language} />

      <Contact language={language} />

    </div>
  );
}

export default App;