"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";

export default function Experience() {
  const [activeTab, setActiveTab] = useState("work");

  const experiences = {
    work: [
      {
        title: "Data Scientist",
        company: "AlmavivA S.p.A.",
        location: "Italy",
        period: "Feb 2024 - Present",
        description:
          "Currently employed as a Data Scientist at AlmavivA's AI/ML Lab, specializing in utilizing data and machine learning techniques to develop innovative solutions.",
      },
      {
        title: "Software Engineer",
        company: "Alecsandria Digital",
        location: "Italy",
        period: "Oct 2023 - Feb 2024",
        description:
          "As a Software Engineer at Alecsandria, I was part of the team developing Angelini's AiD project, a specialized authentication system for medical professionals using Java and Spring Boot. I contributed to implementing and improving features for seamless integration.",
      },
      {
        title: "Data Mining Algorithm Developer",
        company: "Immoveo - CH",
        location: "Italy",
        period: "2020 - 2023",
        description:
          "Developer, as part of the dedicated technical team, of ImmoX software since the startup's launch. Specifically, I developed and implemented the project using Python and SQL technology.",
      },
    ],
    projects: [
      {
        title: "Native Mobile App in Swift",
        company: "Thesis Project",
        location: "University",
        period: "2023",
        description: "Created a Native Mobile app in Swift as a thesis project using Xcode.",
      },
      {
        title: "Mobile App for Android and iOS",
        company: "University Project",
        location: "University",
        period: "2022",
        description: "Developed a cross-platform mobile application using Xamarin for both Android and iOS platforms.",
      },
      {
        title: "E-commerce Website",
        company: "University Project",
        location: "University",
        period: "2021",
        description: "Created a website dedicated to e-commerce using Laravel and MAMP with SQL database.",
      },
      {
        title: "Database Creation and Seeding",
        company: "University Project",
        location: "University",
        period: "2020",
        description: "Designed and implemented a database system using SQL, including schema design and data seeding.",
      },
      {
        title: "Java Data Filtering Software",
        company: "University Project",
        location: "University",
        period: "2019",
        description: "Developed a Java application dedicated to filtering and processing data.",
      },
    ],
  };

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
    <section id="experience" className="relative py-16 md:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold text-white md:text-4xl">My Experience</h2>
          <p className="mx-auto max-w-2xl text-primary-300">
            Professional background and notable projects
          </p>
        </motion.div>

        <div className="mb-8 flex justify-center">
          <div className="inline-flex rounded-full bg-primary-800/50 p-1">
            <button
              onClick={() => setActiveTab("work")}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                activeTab === "work"
                  ? "bg-accent text-white"
                  : "text-primary-300 hover:text-white"
              }`}
            >
              Work Experience
            </button>
            <button
              onClick={() => setActiveTab("projects")}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                activeTab === "projects"
                  ? "bg-accent text-white"
                  : "text-primary-300 hover:text-white"
              }`}
            >
              Projects
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {experiences[activeTab as keyof typeof experiences].map((exp, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
            >
              <SpotlightCard>
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    <p className="text-accent">{exp.company}</p>
                    <p className="mt-4 text-primary-200">{exp.description}</p>
                  </div>
                  <div className="flex flex-col gap-2 md:text-right">
                    <div className="flex items-center gap-2 text-primary-300 md:justify-end">
                      <FiCalendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary-300 md:justify-end">
                      <FiMapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 