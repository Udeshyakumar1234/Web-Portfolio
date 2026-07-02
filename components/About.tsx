import AnimatedSection from "@/components/AnimatedSection";
import { profile } from "@/data/resume";

export default function About() {
  return (
    <section id="about">
      <div className="section-container pb-20 pt-12">
        <AnimatedSection>
          <h2 className="section-title">About</h2>
          <p className="text-base leading-relaxed text-ink-muted">
            I&apos;m {profile.name}, a Computer and Communication Engineering
            student at Manipal Institute of Technology with hands-on experience
            in full stack development and data engineering. I like building things
            that work well, from React and Next.js apps to data pipelines on
            Snowflake and Airflow. I&apos;m always trying to get better at
            designing software that scales.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
