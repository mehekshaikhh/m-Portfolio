import { translations } from "../translations";

interface ContactProps {
  language: "EN" | "DE";
}

const Contact = ({ language }: ContactProps) => {

  const t = translations[language];

  return (
    <section id="contact" className="py-32 px-8">

      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-5xl font-bold mb-10 text-white">
          {t.contact}
        </h2>

        <p className="text-gray-400 text-xl mb-12">
          Open to AI, Data Science, Analytics, and Research opportunities.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">

          <a
            href="mailto:mehekalphine@gmail.com"
            className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/mehek-shaikh-803824260"
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/mehekshaikhh"
            target="_blank"
            className="glass px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
          >
            GitHub
          </a>

        </div>
      </div>
    </section>
  );
};

export default Contact;