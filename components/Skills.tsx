"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { skills } from "@/data/resume";

const skillGroups = [
  { key: "languages" as const, label: "Programming Languages" },
  { key: "frameworks" as const, label: "Frameworks, Tools & Platforms" },
  { key: "concepts" as const, label: "Concepts" },
  { key: "spoken" as const, label: "Languages" },
];

type SkillGroupKey = (typeof skillGroups)[number]["key"];

export default function Skills() {
  const [activeGroup, setActiveGroup] = useState<SkillGroupKey>("languages");
  const activeLabel =
    skillGroups.find((group) => group.key === activeGroup)?.label ?? "";

  return (
    <section id="skills" className="section-divider bg-surface-muted/50">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Skills</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          {/* Category tabs */}
          <div
            role="tablist"
            aria-label="Skill categories"
            className="mb-3 flex flex-wrap gap-1 rounded-xl border border-white/10 bg-white/[0.03] p-1.5"
          >
            {skillGroups.map((group) => {
              const isActive = activeGroup === group.key;
              return (
                <button
                  key={group.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveGroup(group.key)}
                  className={`relative rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-accent to-accent-glow text-white shadow-glow"
                      : "text-ink-muted hover:bg-white/5 hover:text-ink"
                  }`}
                >
                  {group.label}
                </button>
              );
            })}
          </div>

          {/* Skill tags panel */}
          <div
            role="tabpanel"
            aria-label={activeLabel}
            className="min-h-[140px] rounded-xl border border-white/10 bg-white/[0.02] p-5"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-accent/80">
              {activeLabel}
            </p>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeGroup}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="flex flex-wrap gap-2"
              >
                {skills[activeGroup].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.04 }}
                    className="rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-sm text-ink transition-colors hover:border-accent/50 hover:bg-accent/15"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
