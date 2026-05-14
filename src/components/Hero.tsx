import { motion } from "framer-motion";
import { translations } from "../translations";

interface HeroProps {
  language: "EN" | "DE";
}

const Hero = ({ language }: HeroProps) => {

  const t = translations[language];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-8 pt-32"
    >

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="glass inline-block px-4 py-2 rounded-full mb-8 text-gray-300">
            AI & Data Science Portfolio
          </div>

          <h1 className="text-7xl font-bold leading-tight mb-8 text-white">

            {t.heroTitle}

          </h1>

          <p className="text-gray-400 text-2xl leading-relaxed mb-12">
            {t.heroDesc}
          </p>

          <div className="flex gap-6">

            <a
              href="#projects"
              className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
            >
              {t.viewProjects}
            </a>

            <a
              href="#contact"
              className="glass px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
            >
              {t.contactMe}
            </a>

          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <div className="relative flex justify-center">
  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-30"></div>

  <img
    src="public/mehekk.png"
    alt="Mehek Shaikh"
    className="relative w-[350px] h-[350px] object-cover rounded-full border-4 border-purple-500 shadow-2xl"
  />
</div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;