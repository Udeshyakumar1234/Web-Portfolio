"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";
import { profile } from "@/data/resume";

export default function Hero() {
  return (
    <section className="pt-16">
      <div className="section-container pb-0">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm font-medium text-accent"
        >
          Software Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gradient-to-r from-ink via-ink to-accent-glow bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-5xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent-glow px-5 py-2.5 text-sm font-medium text-white shadow-glow transition-all hover:from-accent-hover hover:to-accent active:scale-[0.98]"
          >
            <Mail size={16} />
            Get in touch
          </a>
          <a
            href={profile.resume}
            download={profile.resumeFileName}
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-ink backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/10 active:scale-[0.98]"
          >
            <FileDown size={16} />
            Resume
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-ink backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/10 active:scale-[0.98]"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-ink backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/10 active:scale-[0.98]"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
