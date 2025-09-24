// src/pages/Home.jsx
import React from "react";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500 flex flex-col items-center justify-center px-4">
      
      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-yellow-400 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-green-400 rounded-full opacity-30 animate-pulse delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
          Welcome to <span className="text-yellow-300">AMS</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mb-10">
          Your one-stop Assessment Management System. Manage tasks, track progress, and stay organized effortlessly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/signup"
            className="px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-yellow-500 hover:shadow-xl"
          >
            Get Started
          </a>
          <a
            href="/login"
            className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-xl"
          >
            Login
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 text-white/70 text-sm text-center w-full">
        © {new Date().getFullYear()} Assessment Management System. All rights reserved.
      </div>
    </div>
  );
}
