import Marquee from 'react-fast-marquee';

const skills = [
  'Python',
  'Machine Learning',
  'Deep Learning',
  'NLP',
  'TensorFlow',
  'PyTorch',
  'SQL',
  'Power BI',
  'Tableau',
  'Scikit-learn',
  'Pandas',
  'NumPy',
];

const TechStack = () => {
  return (
    <section className="py-10 border-y border-white/10">
      <Marquee speed={50} gradient={false}>
        {skills.map((skill, index) => (
          <div
            key={index}
            className="glass mx-4 px-6 py-3 rounded-full text-sm text-gray-300"
          >
            {skill}
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default TechStack;