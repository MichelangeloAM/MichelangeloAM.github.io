"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import SpotlightCard from "./SpotlightCard";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_50%)]" />
      
      <div className="container mx-auto px-4 py-16 md:py-32">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-bold text-white md:text-6xl">
                Michelangelo <br />
                <span className="text-accent">Amoruso Manzari</span>
              </h1>
              <h2 className="text-xl text-primary-300 md:text-2xl">
                Software Engineer & Data Scientist
              </h2>
            </div>

            <p className="max-w-lg text-primary-200">
              Computer and Automation Engineer with 3 years of professional experience,
              specializing in data science, software engineering, and machine learning.
            </p>

            <div className="flex gap-4">
              <a
                href="#contact"
                className="rounded-full bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent-600"
              >
                Contact Me
              </a>
              <a
                href="#experience"
                className="rounded-full border border-primary-700 px-6 py-3 font-medium text-white transition-colors hover:border-accent hover:text-accent"
              >
                View Experience
              </a>
            </div>

            <div className="mt-4 flex gap-4">
              <a
                href="https://linkedin.com/in/michelangelo-amoruso-manzari"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary-800 p-3 text-primary-200 transition-colors hover:bg-primary-700 hover:text-white"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="https://github.com/your-github"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary-800 p-3 text-primary-200 transition-colors hover:bg-primary-700 hover:text-white"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="mailto:michelangeloam98@gmail.com"
                className="rounded-full bg-primary-800 p-3 text-primary-200 transition-colors hover:bg-primary-700 hover:text-white"
                aria-label="Email"
              >
                <FiMail size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <SpotlightCard className="w-full max-w-md">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 overflow-hidden rounded-full bg-primary-800">
                    {/* Replace with your profile image */}
                    <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-accent">
                      MA
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Michelangelo Amoruso Manzari</h3>
                    <p className="text-primary-300">AlmavivA S.p.A.</p>
                  </div>
                </div>
                <div className="mt-2 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-primary-300">Role:</span>
                    <span className="text-white">Data Scientist</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary-300">Location:</span>
                    <span className="text-white">Ancona & Rome, Italy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary-300">Experience:</span>
                    <span className="text-white">3+ Years</span>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 