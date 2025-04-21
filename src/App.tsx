import React, { useState, useEffect, useRef } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  User,
  FileText,
  Code,
  Brain,
  Database,
  BarChart3,
} from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const avatarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-500 opacity-10"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Brain className="h-8 w-8 text-blue-400 mr-2" />
          <h1 className="text-2xl font-bold text-blue-400">Mehek Shaikh</h1>
        </div>
        <nav className="flex space-x-6">
          <a href="#about" className="hover:text-blue-400 transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-blue-400 transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-blue-400 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">
            Contact
          </a>
        </nav>
      </header>

      {/* Updated Hero Section with Human Avatar */}
      <section className="relative z-10 container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <div className="relative">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-blue-400">Data Scientist</span> <br />
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              Data Scientist with expertise in Python, Machine Learning, Deep
              Learning, and Natural Language Processing.
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium flex items-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors font-medium flex items-center"
              >
                <Code className="w-5 h-5 mr-2" />
                View Projects
              </a>
            </div>
            <div className="flex mt-8 space-x-4">
              <a
                href="https://www.linkedin.com/in/mehek-shaikh-803824260"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:mehekalphine@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div
            ref={avatarRef}
            className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
          >
            {/* Human Avatar */}
            <div className="relative w-full h-full">
              {/* Head */}
              <div className="absolute inset-0 bg-[#FFE4C4] rounded-full">
                {/* Hair */}
                <div className="absolute -top-4 -left-4 -right-4 h-40 bg-[#4A3728] rounded-t-full"></div>

                {/* Face Features */}
                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-full">
                  {/* Eyes */}
                  <div className="flex justify-center space-x-8">
                    <div className="relative">
                      <div className="w-6 h-3 bg-[#4A3728] rounded-t-full"></div>
                      <div className="w-4 h-4 bg-[#4A3728] rounded-full relative -top-1"></div>
                    </div>
                    <div className="relative">
                      <div className="w-6 h-3 bg-[#4A3728] rounded-t-full"></div>
                      <div className="w-4 h-4 bg-[#4A3728] rounded-full relative -top-1"></div>
                    </div>
                  </div>

                  {/* Smile */}
                  <div className="mt-6 w-12 h-6 border-b-4 border-[#4A3728] rounded-full mx-auto"></div>
                </div>

                {/* Neck */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-20 bg-[#FFE4C4]"></div>
              </div>

              {/* Body/Clothes */}
              <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2">
                <div className="w-48 h-48 bg-blue-600 rounded-xl rotate-45 relative">
                  {/* Collar */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 -rotate-45">
                    <div className="w-16 h-8 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Waving Hand */}
              <div
                className={`absolute -right-8 top-1/2 transform ${
                  isVisible ? 'animate-wave' : ''
                }`}
              >
                <div className="w-12 h-20 bg-[#FFE4C4] rounded-full relative">
                  {/* Sleeve */}
                  <div className="absolute inset-0 bg-blue-600 rounded-full -top-4"></div>
                  {/* Hand */}
                  <div className="absolute top-0 w-full h-12 bg-[#FFE4C4] rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Speech Bubble */}
            <div
              className={`absolute -top-16 right-0 bg-white text-gray-900 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white transform rotate-45"></div>
              Hi, I'm Mehek!
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 bg-gray-800/50 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-blue-400 flex items-center">
                <User className="mr-3 h-8 w-8" />
                About Me
              </h2>
              <p className="text-gray-300 mb-4">
                I'm Mehek Shaikh, a Data Scientist with expertise in Python,
                Machine Learning, Deep Learning, and Natural Language Processing
                (NLP).
              </p>
              <p className="text-gray-300 mb-4">
                Experienced in developing predictive models, analyzing large
                datasets, and delivering actionable insights using Python
                libraries such as TensorFlow, scikit-learn, pandas, and Hugging
                Face.
              </p>
              <p className="text-gray-300 mb-6">
                Passionate about using data-driven solutions to optimize
                performance and support decision-making processes. Proficient in
                applying machine learning algorithms, data visualization, and
                statistics to solve real-world challenges in areas like fraud
                detection, financial forecasting, and customer analytics.
              </p>
              <div className="flex items-center text-gray-400 mb-4">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Mumbai, India</span>
              </div>
              <div className="flex items-center text-gray-400 mb-6">
                <Mail className="h-5 w-5 mr-2" />
                <a
                  href="mailto:mehekalphine@gmail.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  mehekalphine@gmail.com
                </a>
              </div>
              <a
                href="#"
                className="inline-flex items-center px-5 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
              >
                <FileText className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </div>
            <div className="md:w-1/2 bg-gray-900/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-blue-400">
                Education
              </h3>
              <div className="mb-6">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold">Bsc Data Science </h4>
                  <span className="text-gray-400 text-sm">2026(current)</span>
                </div>
                <p className="text-gray-400 text-sm mb-2">
                  Specialized training in data science fundamentals, machine
                  learning, and data analytics
                </p>
              </div>

              <h3 className="text-xl font-bold mb-4 text-blue-400">
                Key Accomplishments
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>
                    Developed an HR analytics model to optimize recruitment
                    processes and predict candidate success using machine
                    learning
                  </span>
                </li>

                <li className="flex">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>
                    Developed a machine learning model to predict customer churn
                    with 85% accuracy
                  </span>
                </li>
                <li className="flex">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>
                    Built a Deep Learning model to predict credit scores,
                    improving prediction accuracy by 15%
                  </span>
                </li>
                <li className="flex">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>
                    Created a text summarization model using NLP techniques and
                    Transformer models
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-xl hover:shadow-lg hover:shadow-blue-500/10 transition-all">
              <div className="flex items-center mb-4">
                <Code className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-bold">Programming Languages</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Python</span>
                    <span>95%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: '95%' }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>R</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: '80%' }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>SQL</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Java</span>
                    <span>70%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: '70%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl hover:shadow-lg hover:shadow-blue-500/10 transition-all">
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-bold">Machine Learning</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>scikit-learn</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: '90%' }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>TensorFlow/Keras</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>NLP</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: '80%' }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Deep Learning</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: '75%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl hover:shadow-lg hover:shadow-blue-500/10 transition-all">
              <div className="flex items-center mb-4">
                <Database className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-bold">Data Tools</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Pandas/NumPy</span>
                    <span>95%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: '95%' }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Matplotlib/Seaborn</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: '90%' }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Jupyter Notebook</span>
                    <span>95%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: '95%' }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>PowerBI</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: '75%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 bg-gray-800/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/10 transition-all">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <Brain className="w-20 h-20 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Resume Parser + Job Match ML App
                </h3>
                <p className="text-gray-400 mb-4">
                  Built an AI-powered resume parser that extracts key
                  information from resumes and matches them with job
                  descriptions using NLP techniques.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-900/40 text-blue-400 rounded text-xs">
                    Python
                  </span>
                  <span className="px-2 py-1 bg-blue-900/40 text-blue-400 rounded text-xs">
                    NLP
                  </span>
                  <span className="px-2 py-1 bg-blue-900/40 text-blue-400 rounded text-xs">
                    Hugging Face
                  </span>
                  <span className="px-2 py-1 bg-blue-900/40 text-blue-400 rounded text-xs">
                    Flask
                  </span>
                </div>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 inline-flex items-center text-sm font-medium"
                >
                  View Project{' '}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/10 transition-all">
              <div className="h-48 bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
                <BarChart3 className="w-20 h-20 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  AI-powered Mental Health Chatbot
                </h3>
                <p className="text-gray-400 mb-4">
                  Developed a mental health chatbot using NLP and deep learning
                  to provide supportive conversations and resources for users.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-900/40 text-blue-400 rounded text-xs">
                    Python
                  </span>
                  <span className="px-2 py-1 bg-blue-900/40 text-blue-400 rounded text-xs">
                    TensorFlow
                  </span>
                  <span className="px-2 py-1 bg-blue-900/40 text-blue-400 rounded text-xs">
                    NLP
                  </span>
                  <span className="px-2 py-1 bg-blue-900/40 text-blue-400 rounded text-xs">
                    Flask
                  </span>
                </div>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 inline-flex items-center text-sm font-medium"
                >
                  View Project{' '}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/10 transition-all">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <Database className="w-20 h-20 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Movie Recommendation System
                </h3>
                <p className="text-gray-400 mb-4">
                  Created a recommendation system using collaborative filtering
                  to suggest movies based on user preferences and historical
                  data.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-900/40 text-blue-400 rounded text-xs">
                    Python
                  </span>
                  <span className="px-2 py-1 bg-blue-900/40 text-blue-400 rounded text-xs">
                    Pandas
                  </span>
                  <span className="px-2 py-1 bg-blue-900/40 text-blue-400 rounded text-xs">
                    scikit-learn
                  </span>
                  <span className="px-2 py-1 bg-blue-900/40 text-blue-400 rounded text-xs">
                    Flask
                  </span>
                </div>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 inline-flex items-center text-sm font-medium"
                >
                  View Project{' '}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/10 transition-all">
              <div className="h-48 bg-gradient-to-r from-yellow-500 to-red-500 flex items-center justify-center">
                <BarChart3 className="w-20 h-20 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Credit Scoring Model</h3>
                <p className="text-gray-400 mb-4">
                  Built a deep learning model to predict credit scores with 15%
                  higher accuracy than traditional methods, enhancing risk
                  assessment for financial institutions.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-900/40 text-blue-400 rounded text-xs">
                    Python
                  </span>
                  <span className="px-2 py-1 bg-blue-900/40 text-blue-400 rounded text-xs">
                    TensorFlow
                  </span>
                  <span className="px-2 py-1 bg-blue-900/40 text-blue-400 rounded text-xs">
                    Pandas
                  </span>
                  <span className="px-2 py-1 bg-blue-900/40 text-blue-400 rounded text-xs">
                    NumPy
                  </span>
                </div>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 inline-flex items-center text-sm font-medium"
                >
                  View Project{' '}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Project 5 */}
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/10 transition-all">
              <div className="h-48 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                <Code className="w-20 h-20 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Text Summarization Tool
                </h3>
                <p className="text-gray-400 mb-4">
                  Developed an extractive or abstractive text summarization
                  model that can condense long documents or articles into
                  concise summaries.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-900/40 text-blue-400 rounded text-xs">
                    Python
                  </span>
                  <span className="px-2 py-1 bg-blue-900/40 text-blue-400 rounded text-xs">
                    Transformers
                  </span>
                  <span className="px-2 py-1 bg-blue-900/40 text-blue-400 rounded text-xs">
                    Hugging Face
                  </span>
                  <span className="px-2 py-1 bg-blue-900/40 text-blue-400 rounded text-xs">
                    NLP
                  </span>
                </div>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 inline-flex items-center text-sm font-medium"
                >
                  View Project{' '}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Project 6 */}
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/10 transition-all">
              <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                <Brain className="w-20 h-20 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Spam Email Classifier
                </h3>
                <p className="text-gray-400 mb-4">
                  Built a machine learning model to classify emails as spam or
                  non-spam using text preprocessing techniques and vectorization
                  with Word2Vec.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-900/40 text-blue-400 rounded text-xs">
                    Python
                  </span>
                  <span className="px-2 py-1 bg-blue-900/40 text-blue-400 rounded text-xs">
                    NLTK
                  </span>
                  <span className="px-2 py-1 bg-blue-900/40 text-blue-400 rounded text-xs">
                    scikit-learn
                  </span>
                  <span className="px-2 py-1 bg-blue-900/40 text-blue-400 rounded text-xs">
                    Word2Vec
                  </span>
                </div>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 inline-flex items-center text-sm font-medium"
                >
                  View Project{' '}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">
            Get In Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-gray-300 mb-6">
                I'm currently looking for new opportunities in the field of Data
                Science and Machine Learning. Feel free to reach out if you have
                any questions or would like to connect!
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-400 mr-4" />
                  <div>
                    <h4 className="text-sm text-gray-400">Email</h4>
                    <a
                      href="mailto:mehekalphine@gmail.com"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      mehekalphine@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-400 mr-4" />
                  <div>
                    <h4 className="text-sm text-gray-400">Location</h4>
                    <p>Mumbai, India</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Linkedin className="h-6 w-6 text-blue-400 mr-4" />
                  <div>
                    <h4 className="text-sm text-gray-400">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/mehek-shaikh-803824260"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      linkedin.com/in/mehek-shaikh-803824260
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-400 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-400 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-400 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-400 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Brain className="h-6 w-6 text-blue-400 mr-2" />
              <span className="text-white font-medium">Mehek Shaikh</span>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/mehek-shaikh-803824260"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:mehekalphine@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="mt-4 text-center text-gray-500 text-sm">
            <p>© 2024 Mehek Shaikh. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Animated text that appears */}
      <div
        className={`fixed top-1/4 right-10 bg-blue-500/10 backdrop-blur-sm p-4 rounded-lg border border-blue-500/20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
        }`}
      >
        <p className="text-blue-400 font-medium">Hi, I'm Mehek 👋</p>
      </div>

      {/* Custom cursor effect */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-blink {
          animation: blink 3s infinite;
        }
        
        .animate-wave {
          animation: wave 2.5s ease-in-out infinite;
          transform-origin: 70% 70%;
        }
        
        .delay-100 {
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  );
}

export default App;
