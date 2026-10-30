// Content for the "Selected work" section on the home page.

export const highlights = [
  {
    tag: "Projects",
    years: "2026",
    role: "Feature lead",
    title: "Gantt timeline for Projects",
    summary:
      "Led a new timeline view for planning projects from first experiment to release, largely on my own. Chose a custom build over third-party libraries so it could keep growing, and kept it fast at scale.",
  },
  {
    tag: "Deals",
    years: "2024 - 2025",
    role: "Frontend owner",
    title: "Pipeline board rebuild",
    summary:
      "Owned the frontend of the core deals view. Merged two board implementations into one, made large boards fast and modern.",
  },
  {
    tag: "Leads & Deals",
    years: "2024",
    role: "Front and back end",
    title: "Lead Source",
    summary:
      "Added source tracking to leads and deals across many services, so teams can see where every deal came from.",
  },
];

export const sideProject = {
  tag: "Side project",
  years: "2025 - present",
  role: "Solo, full stack",
  title: "Community platform for a live streamer",
  summary:
    "Started as a hobby gallery of community art, now used daily for more, such as schedule and Discord integrations. Next.js and PostgreSQL, with a Discord bot that sends uploaded media to a CDN.",
  stat: { value: "~1400", label: "monthly visitors" },
};
