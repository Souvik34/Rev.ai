import React from "react";

const Home = ({ onGetStarted }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-[#0a0a23] via-[#1a1a5a] to-[#5e4b8b] text-white px-6">
      <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600">
        Welcome to Futuristic Code Reviewer
      </h1>
      <p className="max-w-xl text-center text-lg mb-12">
        Your AI-powered assistant for clean, efficient, and secure code reviews.
        Improve your development workflow with smart suggestions and expert feedback.
      </p>
      <button
        onClick={onGetStarted}
        className="px-10 py-4 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-blue-500 transition-colors duration-300 shadow-lg"
      >
        Get Started
      </button>
    </div>
  );
};

export default Home;
