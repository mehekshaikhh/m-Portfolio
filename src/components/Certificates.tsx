interface CertificatesProps {
  language: "EN" | "DE";
}

const certificates = [
  {
    title: "Machine Learning",
    issuer: "ITECH",
    image: "/certificates/ML.jpeg",
  },
  {
    title: "Power BI",
    issuer: "ITECH",
    image: "/certificates/PowerBI.jpeg",
  },
  {
    title: "Statistics",
    issuer: "ITECH",
    image: "/certificates/Statistics.jpeg",
  },
  {
    title: "Python",
    issuer: "ITECH",
    image: "/certificates/Python.jpeg",
  },
  {
    title: "SQL",
    issuer: "ITECH",
    image: "/certificates/SQL.jpeg",
  },
];

const Certificates = ({ language }: CertificatesProps) => {
  return (
    <section id="certificates" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-20 text-white">
          Learning &{" "}
          <span className="gradient-text">
            {language === "DE" ? "Zertifikate" : "Certificates"}
          </span>
        </h2>
<div className="glass rounded-3xl p-10 mb-16">

  <h3 className="text-4xl font-bold text-white mb-6">
    {language === "DE"
      ? "Ausbildung"
      : "Education"}
  </h3>

  <div className="space-y-4">

    <h4 className="text-2xl font-semibold gradient-text">
      B.Sc Data Science
    </h4>

    <p className="text-xl text-gray-300">
      Mumbai University
    </p>

    <p className="text-gray-400 text-lg">
      2023 - 2026
    </p>

    <p className="text-gray-400 leading-relaxed max-w-3xl">
      {language === "DE"
        ? "Studium der Datenwissenschaft mit Schwerpunkt auf Maschinellem Lernen, Statistik, KI, NLP und Predictive Analytics."
        : "Studying Data Science with focus on Machine Learning, Statistics, AI, NLP, and Predictive Analytics."}
    </p>

  </div>

</div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certificates.map((cert, index) => (

            <div
              key={index}
              className="glass rounded-3xl overflow-hidden hover:scale-105 transition duration-300"
            >

              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold text-white mb-2">
                  {cert.title}
                </h3>

                <p className="text-gray-400">
                  {cert.issuer}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Certificates;