import { ArrowRightIcon } from "@phosphor-icons/react/dist/csr/ArrowRight";

// Bars behind the hero. Positions are percentages of the
// hero, so the pattern scales to any screen without tiling.
const TIMELINE_BARS = [
  { top: 14, left: 56, width: 18, delay: 0 },
  { top: 22, left: 66, width: 26, delay: 120 },
  { top: 30, left: 60, width: 12, delay: 240 },
  { top: 38, left: 74, width: 20, delay: 360, highlight: true },
  { top: 46, left: 68, width: 30, delay: 480 },
  { top: 54, left: 82, width: 14, delay: 600 },
  { top: 70, left: 50, width: 22, delay: 720 },
  { top: 78, left: 62, width: 34, delay: 840 },
  { top: 86, left: 40, width: 16, delay: 960 },
];

function TimelineBackground() {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-60 md:opacity-100"
      aria-hidden="true"
    >
      {TIMELINE_BARS.map((bar) => (
        <div
          key={bar.top}
          className="absolute inset-x-0"
          style={{ top: `${bar.top}%` }}
        >
          <div className="h-px bg-[#FFFAEA]/[0.04]" />
          <div
            className={`timeline-bar absolute top-2 h-2 md:h-3 rounded-full ${
              bar.highlight ? "bg-[#FFFAEA]/25" : "bg-[#FFFAEA]/[0.08]"
            }`}
            style={{
              left: `${bar.left}%`,
              width: `${bar.width}%`,
              animationDelay: `${bar.delay}ms`,
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default function HomeScreen() {
  return (
    <div
      id="home"
      className="relative flex items-center w-full min-h-screen overflow-hidden pt-36 pb-24"
    >
      <TimelineBackground />

      <div className="relative w-full px-10">
        <p className="flex items-center gap-3 font-mono text-xs md:text-sm uppercase tracking-widest text-[#FFFAEA]/70">
          Delivering software with impact
        </p>

        <h1 className="mt-8 font-thin leading-[0.9] tracking-tight text-[clamp(3.5rem,11vw,12rem)]">
          Joosep Arrak
        </h1>

        <h2 className="mt-8 text-2xl md:text-4xl font-light">
          Product Engineer.{" "}
          <span className="font-thin">Frontend &amp; AI-native.</span>
        </h2>

        <p className="mt-6 max-w-xl text-base md:text-lg font-light text-[#FFFAEA]/80">
          I build product features end to end, across frontend and backend, from
          first idea to release. Customer focused.
        </p>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-10">
          <a
            href="#work"
            className="w-fit flex items-center px-4 py-3 text-sm font-light md:text-base uppercase border border-[#FFFAEA] hover:bg-[#FFFAEA] hover:text-[#17191a] duration-150"
          >
            See my work
            <ArrowRightIcon size={20} className="ml-2" />
          </a>
          <a
            href="#contact"
            className="text-sm md:text-base font-light uppercase underline underline-offset-4 decoration-[#FFFAEA]/40 hover:decoration-[#FFFAEA] duration-150"
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
}
