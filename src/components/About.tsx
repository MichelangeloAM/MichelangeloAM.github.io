"use client";

import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import { FiCode, FiDatabase, FiServer, FiSmartphone } from "react-icons/fi";

export default function About() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="about" className="relative py-16 md:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold text-white md:text-4xl">About Me</h2>
          <p className="mx-auto max-w-2xl text-primary-300">
            Computer and Automation Engineer with a passion for technology and innovation
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <SpotlightCard>
              <h3 className="mb-4 text-xl font-semibold text-white">Background & Objectives</h3>
              <p className="text-primary-200">
                I am a Computer and Automation Engineer with 3 years of professional experience. During this period, 
                I successfully pursued a bachelor's degree while concurrently gaining valuable hands-on work experience.
              </p>
              <p className="mt-4 text-primary-200">
                Over the past 3 years, I progressively refined my coding expertise through practical projects and 
                employment opportunities. My work approach is deeply rooted in logic, while my receptiveness to 
                novel ideas and technologies remains steadfast.
              </p>
              <p className="mt-4 text-primary-200">
                I am committed to consistently updating my objectives to align with evolving technologies, 
                personal interests, and career achievements.
              </p>
            </SpotlightCard>
          </motion.div>

          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <SpotlightCard>
              <h3 className="mb-4 text-xl font-semibold text-white">Education</h3>
              <ul className="space-y-4">
                <li className="border-l-2 border-accent pl-4">
                  <h4 className="font-medium text-white">Bachelor in Computer and Automatic Engineering</h4>
                  <p className="text-primary-300">Polytechnic University of Marche, 2019-2023</p>
                </li>
                <li className="border-l-2 border-primary-700 pl-4">
                  <h4 className="font-medium text-white">Computer Engineering</h4>
                  <p className="text-primary-300">Polytechnic of Milan University, 2017-2018</p>
                  <p className="text-sm text-primary-400">First 2 years of Computer Engineering</p>
                </li>
                <li className="border-l-2 border-primary-700 pl-4">
                  <h4 className="font-medium text-white">Liceo Scientifico</h4>
                  <p className="text-primary-300">Scientific High school with Cambridge courses</p>
                </li>
              </ul>
            </SpotlightCard>
          </motion.div>

          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            className="md:col-span-2"
          >
            <SpotlightCard>
              <h3 className="mb-6 text-xl font-semibold text-white">My Interests</h3>
              <div className="grid gap-6 md:grid-cols-4">
                <div className="flex flex-col items-center gap-3 rounded-xl bg-primary-800/50 p-4 text-center">
                  <div className="rounded-full bg-accent/20 p-3 text-accent">
                    <FiCode size={24} />
                  </div>
                  <h4 className="font-medium text-white">Coding</h4>
                  <p className="text-sm text-primary-300">for Logic</p>
                </div>
                <div className="flex flex-col items-center gap-3 rounded-xl bg-primary-800/50 p-4 text-center">
                  <div className="rounded-full bg-accent/20 p-3 text-accent">
                    <FiSmartphone size={24} />
                  </div>
                  <h4 className="font-medium text-white">Technology</h4>
                  <p className="text-sm text-primary-300">for Insight</p>
                </div>
                <div className="flex flex-col items-center gap-3 rounded-xl bg-primary-800/50 p-4 text-center">
                  <div className="rounded-full bg-accent/20 p-3 text-accent">
                    <FiDatabase size={24} />
                  </div>
                  <h4 className="font-medium text-white">Photography</h4>
                  <p className="text-sm text-primary-300">for Creativity</p>
                </div>
                <div className="flex flex-col items-center gap-3 rounded-xl bg-primary-800/50 p-4 text-center">
                  <div className="rounded-full bg-accent/20 p-3 text-accent">
                    <FiServer size={24} />
                  </div>
                  <h4 className="font-medium text-white">Running</h4>
                  <p className="text-sm text-primary-300">for Perseverance</p>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 