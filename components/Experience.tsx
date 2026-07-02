"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { experience } from "@/data/resume";

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="section-divider bg-surface-muted/50">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Work Experience</h2>
        </AnimatedSection>

        <div className="space-y-4">
          {experience.map((job, index) => {
            const isOpen = expanded === index;
            return (
              <AnimatedSection key={job.company} delay={index * 0.1}>
                <article className="card overflow-hidden hover:shadow-card">
                  <button
                    type="button"
                    onClick={() => setExpanded(isOpen ? null : index)}
                    className="flex w-full items-start justify-between gap-4 p-5 text-left transition-colors hover:bg-white/5"
                    aria-expanded={isOpen}
                  >
                    <div>
                      <h3 className="font-semibold text-ink">{job.company}</h3>
                      <p className="mt-0.5 text-sm text-ink-muted">{job.role}</p>
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      <span className="text-sm text-ink-faint">{job.period}</span>
                      <ChevronDown
                        size={18}
                        className={`text-ink-faint transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <ul className="space-y-2.5 border-t border-white/10 px-5 pb-5 pt-4">
                        {job.highlights.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2.5 text-sm leading-relaxed text-ink-muted"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
