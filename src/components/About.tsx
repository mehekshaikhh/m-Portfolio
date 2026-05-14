const About = () => {
  return (
    <section id="about" className="py-32 px-8">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        <div className="glass rounded-3xl p-10 h-[400px] flex items-center justify-center text-6xl font-bold gradient-text">
          MS
        </div>

        <div>
          <h2 className="text-5xl font-bold mb-8">
            About <span className="gradient-text">Me</span>
          </h2>

          <p className="text-gray-400 leading-relaxed text-lg mb-8">
            BSc Data Science student passionate about Machine Learning,
            Predictive Analytics, and NLP systems. Experienced in building
            intelligent solutions using real-world datasets and modern AI tools.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">

            <div className="glass p-6 rounded-2xl">
              <h3 className="text-4xl font-bold gradient-text">4+</h3>
              <p className="text-gray-400 mt-2">AI Projects</p>
            </div>

            <div className="glass p-6 rounded-2xl">
              <h3 className="text-4xl font-bold gradient-text">7M</h3>
              <p className="text-gray-400 mt-2">Industry Experience</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;