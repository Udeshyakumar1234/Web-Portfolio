"use client";

import { useState } from "react";
import { Check, Copy, FileDown, Github, Linkedin, Mail, type LucideIcon } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { profile } from "@/data/resume";

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(label);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const contactItems: {
    label: string;
    value: string;
    href: string;
    icon: LucideIcon;
    copyable?: boolean;
    download?: string;
  }[] = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: Mail,
      copyable: true,
    },
    {
      label: "Resume",
      value: "Download PDF",
      href: profile.resume,
      icon: FileDown,
      download: profile.resumeFileName,
    },
    {
      label: "LinkedIn",
      value: "udeshya-kumar",
      href: profile.linkedin,
      icon: Linkedin,
    },
    {
      label: "GitHub",
      value: "Udeshyakumar1234",
      href: profile.github,
      icon: Github,
    },
  ];

  return (
    <section id="contact" className="section-divider bg-surface-muted/50">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Contact</h2>
          <p className="mb-8 max-w-lg text-base text-ink-muted">
            Open to job offers, collaborations, and interesting projects.
            Feel free to reach out. I&apos;ll get back to you as soon as I can.
          </p>
        </AnimatedSection>

        <div className="grid gap-3 sm:grid-cols-2">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            const isCopied = copied === item.label;

            return (
              <AnimatedSection key={item.label} delay={index * 0.08}>
                <div className="group card-hover flex items-center justify-between p-4">
                  <a
                    href={item.href}
                    download={item.download}
                    target={item.copyable || item.download ? undefined : "_blank"}
                    rel={
                      item.copyable || item.download
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="flex min-w-0 flex-1 items-center gap-3"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-ink-muted transition-colors group-hover:bg-accent/20 group-hover:text-accent">
                      <Icon size={18} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-wide text-ink-faint">
                        {item.label}
                      </p>
                      <p className="truncate text-sm text-ink">{item.value}</p>
                    </div>
                  </a>

                  {item.copyable && (
                    <button
                      type="button"
                      aria-label={`Copy ${item.label}`}
                      onClick={() => copyToClipboard(item.value, item.label)}
                      className="ml-2 shrink-0 rounded-md p-2 text-ink-faint transition-colors hover:bg-white/10 hover:text-ink"
                    >
                      {isCopied ? (
                        <Check size={16} className="text-green-400" />
                      ) : (
                        <Copy size={16} />
                      )}
                    </button>
                  )}
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
