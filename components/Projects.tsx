"use client";

import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { projects } from "@/data/resume";

export default function Projects() {
  return (
    <section id="projects" className="section-divider">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Projects</h2>
        </AnimatedSection>

        <div className="grid gap-5">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.1}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group card-hover block p-5 duration-200 hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold text-ink transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-ink-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white/10 px-2.5 py-1 text-xs font-medium text-ink-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
