// Content for the "Selected work" section on the home page.
// Links go to Pipedrive's public help-centre article for each feature.

export type Highlight = {
  tag: string;
  years: string;
  role: string;
  title: string;
  summary: string;
  link: { href: string; label: string };
};

export type SideProject = {
  tag: string;
  years: string;
  role: string;
  title: string;
  summary: string;
  stat: { value: string; label: string };
};

export const highlights: Highlight[] = [
  {
    tag: "Projects",
    years: "2026",
    role: "Feature lead",
    title: "Gantt timeline for Projects",
    summary:
      "Took a new timeline view from a fake door test to release for all users in about two months. Evaluated third-party libraries, chose a custom build, and kept it fast at scale. Then turned it into a shared component that powers a multi-project view.",
    link: {
      href: "https://support.pipedrive.com/en/article/projects-tasks-and-subtasks#use-the-gantt-view-for-timeline-planning",
      label: "Gantt view",
    },
  },
  {
    tag: "Deals",
    years: "2024 - 2025",
    role: "Project lead, frontend owner",
    title: "Pipeline board rebuild",
    summary:
      "Owned the frontend of the core deals view and led the project that made the board customizable. Merged two board implementations into one, made large boards fast and modern.",
    link: {
      href: "https://support.pipedrive.com/en/article/pipeline-view",
      label: "Pipeline view",
    },
  },
  {
    tag: "Leads & Deals",
    years: "2024",
    role: "Front and back end",
    title: "Lead Source",
    summary:
      "Added source tracking to leads and deals across many services, so teams can see where every deal came from.",
    link: {
      href: "https://support.pipedrive.com/en/article/lead-source-deals",
      label: "Lead source",
    },
  },
  {
    tag: "Deals & Contacts",
    years: "2023",
    role: "Implementation lead",
    title: "Note limits",
    summary:
      "Added note limits to every note editor, with server-side validation. Wrote a shared library so the limit logic and translations live in one place.",
    link: {
      href: "https://support.pipedrive.com/en/article/how-can-i-add-notes-to-a-deal-or-contact",
      label: "Notes",
    },
  },
];

export const sideProject: SideProject = {
  tag: "Side project",
  years: "2025 - present",
  role: "Solo, full stack",
  title: "Community platform for a live streamer",
  summary:
    "Started as a hobby gallery of community art, now used daily for more, such as schedule and Discord integrations. Next.js and PostgreSQL, with a Discord bot that sends uploaded media to a CDN.",
  stat: { value: "~1400", label: "monthly visitors" },
};
