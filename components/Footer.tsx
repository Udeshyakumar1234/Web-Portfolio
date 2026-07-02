import { profile } from "@/data/resume";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-divider">
      <div className="mx-auto max-w-3xl px-6 py-8 text-sm text-ink-faint md:px-8">
        <p>&copy; {year} {profile.name}</p>
      </div>
    </footer>
  );
}
