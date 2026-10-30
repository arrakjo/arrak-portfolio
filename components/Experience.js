import { RewindIcon } from "@phosphor-icons/react/dist/csr/Rewind";
import ResumeButton from "./ResumeButton";

function Experience({ employmentData }) {
  return (
    <>
      <div
        id="experience"
        className="flex justify-center items-center bg-[#FFFAEA] text-[#17191a] w-full h-full md:py-48 py-32"
      >
        <div className="w-1/2 xl:pl-40 hidden xl:flex items-center justify-center pr-16">
          <RewindIcon size={120} weight="thin" />
        </div>

        <div className="w-full xl:w-1/2 2xl:pl-20 h-full flex flex-col justify-center">
          <div className="px-10 mb-5">
            <p className="text-base">
              <span className="font-light text-[#17191a] ">/</span> Experience
            </p>
          </div>

          {employmentData.map((item) => (
            <div key={item.id} className="flex w-full px-5 mt-2 mb-10">
              {/* XP "bar" CSS */}
              <div>
                <div className="w-3 h-3 bg-[#17191a] rounded-full mt-2 ml-5 "></div>
                <div className="w-16 h-0.5 bg-[#17191a] rotate-90 ml-[-6px] mt-7 "></div>
              </div>
              {/* Position */}
              <div>
                <h3 className="text-sm md:text-lg lg:text-2xl font-light">
                  {item.position}
                </h3>
                <p className="text-xs mt-2 font-light">
                  {item.company}
                  <span className="ml-2">—</span>
                  <span className="text-[#656565] ml-2">
                    {item.start} - {item.end}
                  </span>
                </p>
              </div>
            </div>
          ))}

          <ResumeButton className="mt-16 ml-11" />
        </div>
      </div>
    </>
  );
}

export default Experience;
