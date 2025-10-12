import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Header */}
      <header className="w-full max-w-4xl text-center py-8">
        <h1 className="text-4xl font-bold text-gray-800">Mehek Shaikh Portfolio</h1>
        <p className="text-gray-600 mt-2">Data Scientist | Machine Learning | NLP | Deep Learning</p>
      </header>

      {/* Projects Section */}
      <section className="w-full max-w-4xl my-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-2">Smart Risk Delivery Score</h3>
            <p className="text-gray-600">Predict delivery risks using ML & advanced data analytics to optimize supply chain decisions.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-2">NLP Sentiment Analyzer</h3>
            <p className="text-gray-600">Analyzed customer reviews using NLP techniques for actionable insights and feedback optimization.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-2">Deep Learning Image Classifier</h3>
            <p className="text-gray-600">Built a CNN model to classify images accurately with TensorFlow & Keras, achieving high accuracy on unseen data.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-2">Automated Data Cleaning Tool</h3>
            <p className="text-gray-600">Developed Python scripts for smart data cleaning and preprocessing, reducing manual effort and errors.</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="w-full max-w-4xl my-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Me</h2>
        <form
          action="https://formspree.io/f/xyzpqded"
          method="POST"
          className="bg-white p-6 rounded-lg shadow space-y-4"
        >
          <div>
            <label htmlFor="name" className="block font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block font-medium mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-4xl text-center py-6 text-gray-500">
        © 2025 Mehek Shaikh. All Rights Reserved.
      </footer>
    </div>
  );
};

export default App;
