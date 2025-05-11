"use client";

import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import { FiCode, FiUsers } from "react-icons/fi";

export default function Skills() {
  const codingSkills = [
    { name: "Python", level: 90 },
    { name: "Java", level: 80 },
    { name: "C++", level: 70 },
    { name: "Swift", level: 65 },
    { name: "HTML", level: 85 },
    { name: "PHP", level: 60 },
  ];

  const softSkills = [
    "Strong Communication: proficient in conveying complex ideas clearly",
    "Team Collaboration: adept at collaborating seamlessly with teams",
    "Adaptability: ability to adapt communication style and approach according to the audience",
    "Interpersonal Networking: fast and effective in creating strong professional relationships",
    "Active Listening: skilled at comprehending and responding to colleagues and clients",
  ];

  const languages = [
    { name: "Italian", level: "Native Speaker" },
    { name: "English", level: "Native Speaker (C2)" },
    { name: "Spanish", level: "Basic Listening and Speaking" },
  ];

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
    <section id="skills" className="relative py-16 md:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold text-white md:text-4xl">My Skills</h2>
          <p className="mx-auto max-w-2xl text-primary-300">
            Technical expertise and professional capabilities
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
              <div className="flex items-center gap-3 pb-4">
                <div className="rounded-full bg-accent/20 p-2 text-accent">
                  <FiCode size={20} />
                </div>
                <h3 className="text-xl font-semibold text-white">Coding Skills</h3>
              </div>
              <div className="space-y-4">
                {codingSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="mb-1 flex justify-between">
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className="text-sm text-primary-300">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-primary-800">
                      <motion.div
                        className="h-full bg-accent"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
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
              <div className="flex items-center gap-3 pb-4">
                <div className="rounded-full bg-accent/20 p-2 text-accent">
                  <FiUsers size={20} />
                </div>
                <h3 className="text-xl font-semibold text-white">Soft Skills</h3>
              </div>
              <ul className="space-y-3">
                {softSkills.map((skill, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1 text-accent">•</span>
                    <span className="text-primary-200">{skill}</span>
                  </li>
                ))}
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
              <h3 className="mb-4 text-xl font-semibold text-white">Languages</h3>
              <div className="grid gap-6 md:grid-cols-3">
                {languages.map((lang, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-primary-800 bg-primary-900/50 p-4"
                  >
                    <h4 className="mb-1 font-medium text-white">{lang.name}</h4>
                    <p className="text-primary-300">{lang.level}</p>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 