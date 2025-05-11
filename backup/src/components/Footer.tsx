import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-primary-800 bg-primary-950 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <Link href="/" className="text-xl font-bold text-white">
              Michelangelo<span className="text-accent">.</span>
            </Link>
            <p className="mt-2 text-sm text-primary-400">
              Software Engineer & Data Scientist
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <nav>
              <ul className="flex space-x-6">
                {["About", "Experience", "Skills", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="text-sm text-primary-300 transition-colors hover:text-white"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/michelangelo-amoruso-manzari"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary-800 p-2 text-primary-300 transition-colors hover:bg-primary-700 hover:text-white"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={18} />
              </a>
              <a
                href="https://github.com/your-github"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary-800 p-2 text-primary-300 transition-colors hover:bg-primary-700 hover:text-white"
                aria-label="GitHub"
              >
                <FiGithub size={18} />
              </a>
              <a
                href="mailto:michelangeloam98@gmail.com"
                className="rounded-full bg-primary-800 p-2 text-primary-300 transition-colors hover:bg-primary-700 hover:text-white"
                aria-label="Email"
              >
                <FiMail size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-primary-800 pt-6 text-center">
          <p className="text-sm text-primary-400">
            © {currentYear} Michelangelo Amoruso Manzari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 