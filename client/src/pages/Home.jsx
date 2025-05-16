import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 px-6 text-center text-indigo-100 font-orbitron">
      <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight glow-text">
        Welcome to NeonWave
      </h1>
      <p className="text-indigo-300 text-lg md:text-xl mb-10 max-w-3xl">
        Your gateway to futuristic web experiences powered by AI and quantum tech.
      </p>
      <button
        onClick={() => alert("Get Started Clicked!")}
        className="px-8 py-3 rounded-full font-semibold text-white shadow-lg
                   bg-gradient-to-r from-purple-800 via-blue-700 to-indigo-700
                   hover:from-indigo-700 hover:via-purple-800 hover:to-blue-700
                   transition-transform transform hover:scale-105"
      >
        Get Started
      </button>
    </main>
  );
}
