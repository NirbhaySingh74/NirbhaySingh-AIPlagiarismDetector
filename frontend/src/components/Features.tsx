import React from "react";

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Platform Features</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md transition hover:shadow-lg">
            <h3 className="text-xl font-semibold">Speed</h3>
            <p className="mt-4">
              Get results quickly with our AI-powered plagiarism detection
              system.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transition hover:shadow-lg">
            <h3 className="text-xl font-semibold">Accuracy</h3>
            <p className="mt-4">
              Our AI ensures high accuracy in identifying plagiarized content.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transition hover:shadow-lg">
            <h3 className="text-xl font-semibold">Detailed Reports</h3>
            <p className="mt-4">
              Receive comprehensive reports with highlighted plagiarized
              sections.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
