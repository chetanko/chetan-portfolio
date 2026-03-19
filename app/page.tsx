"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* 🔝 NAVBAR */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-4 bg-black/40 backdrop-blur-md z-50 border-b border-gray-800">
        <h1 className="font-bold text-xl tracking-wide">Chetan</h1>
        <div className="flex gap-6 text-sm">
          <a href="#home" className="hover:text-purple-400">Home</a>
          <a href="#projects" className="hover:text-purple-400">Projects</a>
          <a href="#contact" className="hover:text-purple-400">Contact</a>
        </div>
      </nav>

      {/* 🏠 HERO */}
      <section id="home" className="h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">

        {/* Glow blobs */}
        <div className="absolute w-[600px] h-[600px] bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text"
        >
          Chetan Pal
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-gray-400 text-xl text-center"
        >
          DevOps Engineer | Robotics | Product
        </motion.p>

        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:scale-105 transition">
            View Projects
          </button>
          <button className="px-6 py-3 border border-gray-600 rounded-xl hover:bg-white hover:text-black transition">
            Contact Me
          </button>
        </div>
      </section>

      {/* 💼 PROJECTS */}
      <section id="projects" className="min-h-screen px-8 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-6 bg-white/5 backdrop-blur-lg border border-gray-700 rounded-2xl hover:scale-105 hover:border-purple-500 transition">
            <h3 className="text-xl font-semibold">IoT RF System</h3>
            <p className="text-gray-400 mt-2">Arduino + RF communication</p>
          </div>

          <div className="p-6 bg-white/5 backdrop-blur-lg border border-gray-700 rounded-2xl hover:scale-105 hover:border-purple-500 transition">
            <h3 className="text-xl font-semibold">Robotics Curriculum</h3>
            <p className="text-gray-400 mt-2">Designed for students</p>
          </div>

          <div className="p-6 bg-white/5 backdrop-blur-lg border border-gray-700 rounded-2xl hover:scale-105 hover:border-purple-500 transition">
            <h3 className="text-xl font-semibold">DevOps Pipeline</h3>
            <p className="text-gray-400 mt-2">Docker + CI/CD</p>
          </div>

        </div>
      </section>

      {/* 📩 CONTACT */}
      <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-400 mb-6">Let’s build something impactful</p>

        <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:scale-105 transition">
          Email Me
        </button>
      </section>

    </main>
  );
}