import { skills } from "./utils/skills.utils";
import { CodeIcon } from "@phosphor-icons/react/dist/csr/Code";

export default function Skills() {
  const { tech, cloud, tools } = skills;

  return (
    <div
      id="skills"
      className="flex justify-center items-center bg-[#17191a] text-[#FFFAEA] w-full h-full md:py-48 py-32"
    >
      <div className="w-1/2 xl:pl-40 hidden xl:flex items-center justify-center pr-16">
        <CodeIcon size={120} weight="thin" />
      </div>

      <div className="w-full xl:w-1/2 2xl:pl-20 h-full flex flex-col items-center justify-center">
        <div className="px-10">
          <p className="text-base mb-[22px] ">
            <span className="font-light text-[#F1F1F1] ">/</span> Skills
          </p>
          <div>
            <h3 className="text-xl md:text-4xl font-light mb-2 md:mb-3">
              Tech.
            </h3>
            <div className="flex w-full md:w-2/3 flex-wrap">
              {tech?.map((i) => (
                <p
                  key={i}
                  className="uppercase text-sm border flex justify-center items-center w-max mr-4 mt-4 border-[#FFFAEA] py-2 px-3 "
                >
                  {i}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-xl md:text-4xl font-light mb-2 md:mb-3">
              Cloud.
            </h3>
            <div className="flex w-full md:w-2/3 flex-wrap">
              {cloud?.map((i) => (
                <p
                  key={i}
                  className="uppercase text-sm border flex justify-center items-center w-max mr-4 mt-4 border-[#FFFAEA] py-2 px-3 "
                >
                  {i}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-xl md:text-4xl font-light mb-2 md:mb-3">
              Tools.
            </h3>
            <div className="flex w-full md:w-2/3 flex-wrap">
              {tools?.map((i) => (
                <p
                  key={i}
                  className="uppercase text-sm border flex justify-center items-center w-max mr-4 mt-4 border-[#FFFAEA] py-2 px-3 "
                >
                  {i}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
