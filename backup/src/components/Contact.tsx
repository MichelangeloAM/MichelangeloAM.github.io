"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // This is a placeholder for actual form submission logic
    // In a real implementation, you would send this data to a server
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="relative py-16 md:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold text-white md:text-4xl">Get In Touch</h2>
          <p className="mx-auto max-w-2xl text-primary-300">
            Have a question or want to work together? Feel free to contact me!
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <SpotlightCard>
              <h3 className="mb-6 text-xl font-semibold text-white">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-accent/20 p-3 text-accent">
                    <FiMail />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Email</h4>
                    <a href="mailto:michelangeloam98@gmail.com" className="text-primary-300 transition-colors hover:text-accent">
                      michelangeloam98@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-accent/20 p-3 text-accent">
                    <FiPhone />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Phone</h4>
                    <a href="tel:+393663992615" className="text-primary-300 transition-colors hover:text-accent">
                      +39 366 3992615
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-accent/20 p-3 text-accent">
                    <FiMapPin />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Location</h4>
                    <p className="text-primary-300">Ancona & Rome, Italy</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="mb-3 font-medium text-white">Connect with me</h4>
                <p className="text-primary-300">
                  Find me on{" "}
                  <a
                    href="https://linkedin.com/in/michelangelo-amoruso-manzari"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline transition-colors hover:text-accent-400"
                  >
                    LinkedIn
                  </a>
                </p>
              </div>
            </SpotlightCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3"
          >
            <SpotlightCard>
              <h3 className="mb-6 text-xl font-semibold text-white">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1 block text-sm text-primary-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-primary-700 bg-primary-800/50 px-4 py-2 text-white placeholder:text-primary-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm text-primary-300">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-primary-700 bg-primary-800/50 px-4 py-2 text-white placeholder:text-primary-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="mb-1 block text-sm text-primary-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-primary-700 bg-primary-800/50 px-4 py-2 text-white placeholder:text-primary-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="How can I help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm text-primary-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full rounded-lg border border-primary-700 bg-primary-800/50 px-4 py-2 text-white placeholder:text-primary-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent-600 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <FiSend />
                      </>
                    )}
                  </button>
                  
                  {submitStatus === "success" && (
                    <p className="mt-3 text-green-400">
                      Your message has been sent successfully!
                    </p>
                  )}
                  
                  {submitStatus === "error" && (
                    <p className="mt-3 text-red-400">
                      There was an error sending your message. Please try again.
                    </p>
                  )}
                </div>
              </form>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 