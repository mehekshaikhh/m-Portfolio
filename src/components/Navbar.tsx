import { Download } from "lucide-react";
import { translations } from "../translations";

interface NavbarProps {
  language: "EN" | "DE";
  setLanguage: React.Dispatch<React.SetStateAction<"EN" | "DE">>;
}

const Navbar = ({ language, setLanguage }: NavbarProps) => {

  const t = translations[language];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0b0b14]/90 backdrop-blur-lg border-b border-white/10 px-8 py-5 flex justify-between items-center">

      <h1 className="text-3xl font-bold gradient-text">
        MS
      </h1>

      <div className="hidden md:flex gap-10 text-sm text-gray-300">

        <a href="#home" className="hover:text-white transition">
          {t.home}
        </a>

        <a href="#projects" className="hover:text-white transition">
          {t.projects}
        </a>

        <a href="#certificates" className="hover:text-white transition">
          {t.certificates}
        </a>

        <a href="#contact" className="hover:text-white transition">
          {t.contact}
        </a>

      </div>

      <div className="flex items-center gap-4">

        <button
          onClick={() => setLanguage("EN")}
          className={`px-4 py-2 rounded-xl border transition ${
            language === "EN"
              ? "bg-white text-black"
              : "bg-transparent text-white border-white/20"
          }`}
        >
          EN
        </button>

        <button
          onClick={() => setLanguage("DE")}
          className={`px-4 py-2 rounded-xl border transition ${
            language === "DE"
              ? "bg-white text-black"
              : "bg-transparent text-white border-white/20"
          }`}
        >
          DE
        </button>

        <a
  href="/CV.pdf"
  download="CV.pdf"
  className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-2xl font-semibold flex items-center gap-2 hover:scale-105 transition"
>
  <Download size={18} />
  {t.resume}
</a>
      </div>
    </nav>
  );
};

export default Navbar;