import { alsoBuilt, highlights, sideProject } from "./utils/work.utils";

export default function SelectedWork() {
  return (
    <div
      id="work"
      className="flex justify-center bg-[#17191a] text-[#FFFAEA] w-full md:py-48 py-32"
    >
      <div className="w-full max-w-6xl px-10">
        <p className="text-base mb-5.5">
          <span className="font-light text-[#F1F1F1]">/</span> Selected work
        </p>
        <h2 className="text-3xl md:text-5xl font-thin leading-tight mb-10">
          Highlights at Pipedrive.
        </h2>

        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="flex flex-col border border-[#FFFAEA]/20 p-6"
            >
              <div className="flex items-center justify-between">
                <span className="border border-[#FFFAEA]/30 px-2 py-1 font-mono text-xs uppercase tracking-wider">
                  {item.tag}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-light mt-6">
                {item.title}
              </h3>
              <p className="text-xs uppercase text-[#FFFAEA]/60 mt-1">
                {item.role}
              </p>
              <p className="text-sm font-light text-[#FFFAEA]/75 mt-4">
                {item.summary}
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl md:text-5xl font-thin leading-tight mb-10">
          Side project.
        </h2>

        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16 border border-[#FFFAEA]/20 p-6 md:p-8">
          <div className="grow">
            <div className="flex items-center gap-4">
              <span className="border border-[#FFFAEA]/30 px-2 py-1 font-mono text-xs uppercase tracking-wider">
                {sideProject.tag}
              </span>
              <span className="font-mono text-xs text-[#FFFAEA]/60">
                {sideProject.years}
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-light mt-6">
              {sideProject.title}
            </h3>
            <p className="text-xs uppercase text-[#FFFAEA]/60 mt-1">
              {sideProject.role}
            </p>
            <p className="text-sm font-light text-[#FFFAEA]/75 mt-4 max-w-2xl">
              {sideProject.summary}
            </p>
          </div>
          <div className="shrink-0">
            <p className="text-5xl md:text-6xl font-thin">
              {sideProject.stat.value}
            </p>
            <p className="text-xs uppercase text-[#FFFAEA]/60 mt-2">
              {sideProject.stat.label}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
