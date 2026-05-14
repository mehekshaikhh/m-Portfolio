import { translations } from "../translations";

interface ProjectsProps {
  language: "EN" | "DE";
}

const projects = [
  {
    title: "Credit Card Fraud Detection",
    image: "/projects/fraud.png",
    desc: "Machine learning model for fraud transaction detection.",
    medium: "https://medium.com/@mehekalphine/why-credit-card-fraud-detection-is-harder-than-it-looks-151d8a0c86ea"
  },

  {
    title: "Social Sentiment Analysis",
    image: "/projects/social.png",
    desc: "NLP-powered sentiment analysis system.",
    medium: "https://medium.com/"
  },

  {
    title: "Supply Chain Optimization",
    image: "/projects/supply.png",
    desc: "Predictive analytics for inventory optimization.",
    medium: "https://medium.com/"
  },

  {
    title: "AI Delivery Risk Prediction System",
    image: "/projects/delivery-worker.png",
    desc: "Built an AI-powered logistics prediction system analyzing delivery delays, traffic conditions, weather impact, and rider efficiency using Machine Learning.",
    medium: "https://medium.com/@mehekalphine/how-i-built-a-delivery-risk-prediction-system-using-machine-learning-end-to-end-863822511889"
  }
];

const Projects = ({ language }: ProjectsProps) => {

  const t = translations[language];

  return (
    <section id="projects" className="py-32 px-8">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16 text-white">
          Featured <span className="gradient-text">{t.projects}</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <div
              key={index}
              className="glass rounded-3xl overflow-hidden hover:-translate-y-3 transition duration-300"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-8 leading-relaxed">
                  {project.desc}
                </p>

                <a
                  href={project.medium}
                  target="_blank"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-2xl inline-block font-semibold hover:scale-105 transition"
                >
                  Read Medium Blog
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
     </section>
  );
};

export default Projects;