import { alsoBuilt, highlights } from "./utils/work.utils";

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
        <h2 className="text-3xl md:text-5xl font-thin leading-tight">
          Highlights at Pipedrive.
        </h2>

        <div className="grid gap-6 md:grid-cols-3 mt-14">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="flex flex-col border border-[#FFFAEA]/20 p-6"
            >
              <div className="flex items-center justify-between">
                <span className="border border-[#FFFAEA]/30 px-2 py-1 font-mono text-xs uppercase tracking-wider">
                  {item.tag}
                </span>
                <span className="font-mono text-xs text-[#FFFAEA]/60">
                  {item.years}
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

        <p className="text-sm font-light text-[#FFFAEA]/70 mt-10">
          <span className="uppercase text-xs text-[#FFFAEA]/60 mr-3">
            Also built
          </span>
          {alsoBuilt.join(" · ")}
        </p>
      </div>
    </div>
  );
}
