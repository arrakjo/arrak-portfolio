export type SkillGroup = {
  title: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    title: "Tech",
    items: [
      "TypeScript",
      "JavaScript",
      "React",
      "Node.js",
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "CSS-in-JS",
      "PHP",
    ],
  },
  {
    title: "AI",
    items: ["Claude Code", "Gemini", "NotebookLM", "GitHub Copilot"],
  },
  {
    title: "Practice",
    items: [
      "Performance",
      "Realtime / WebSockets",
      "Feature flags",
      "A/B experiments",
      "Testing",
      "CI/CD",
      "Code review",
      "On-call",
    ],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub Actions", "Amplitude", "Grafana", "Figma", "Vercel"],
  },
];
