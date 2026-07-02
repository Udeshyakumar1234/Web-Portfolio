import AnimatedSection from "@/components/AnimatedSection";
import { education } from "@/data/resume";

export default function Education() {
  return (
    <section id="education" className="section-divider">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Education</h2>
          <article className="card p-5">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="font-semibold text-ink">{education.institution}</h3>
                <p className="mt-1 text-sm text-ink-muted">{education.degree}</p>
              </div>
              <span className="mt-1 text-sm text-ink-faint sm:mt-0">
                {education.period}
              </span>
            </div>
            <p className="mt-3 text-sm text-ink-muted">
              CGPA: <span className="font-medium text-ink">{education.cgpa}</span>
            </p>
            <p className="mt-2 text-sm text-ink-muted">{education.note}</p>
          </article>
        </AnimatedSection>
      </div>
    </section>
  );
}
