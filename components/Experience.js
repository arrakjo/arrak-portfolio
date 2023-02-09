import Image from "next/image";
import { motion } from "framer-motion";
import ExperienceSVG from "../public/img/note.svg";

function Experience({ employmentData }) {
  return (
    <div
      id="experience"
      className="flex justify-center items-center bg-[#232323] text-[#ECECEC] w-full h-full md:py-48 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="w-1/2 xl:pl-40 hidden xl:flex items-center justify-center pr-16"
      >
        <Image
          src={ExperienceSVG}
          alt="Experience"
          width={314}
          height={309}
          priority
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="w-full xl:w-1/2 2xl:pl-20 h-full flex flex-col justify-center"
      >
        <div className="px-10 mb-5">
          <p className="text-base">
            <span className="font-bold text-[#F1F1F1] ">/</span> Experience
          </p>
        </div>

        {employmentData.map((item) => (
          <div key={item.id} className="flex w-full px-5 mt-2 mb-10">
            {/* XP "bar" CSS */}
            <div>
              <div className="w-3 h-3 bg-[#ECECEC] rounded-full mt-2 ml-5 "></div>
              <div className="w-16 h-0.5 bg-[#ECECEC] rotate-90 ml-[-6px] mt-7 "></div>
            </div>
            {/* Position */}
            <div>
              <h3 className="text-sm md:text-lg lg:text-2xl">
                {item.position}
              </h3>
              <p className="text-xs mt-2">
                {item.company}
                <span className="ml-2">—</span>
                <span className="text-[#656565] ml-2">
                  {item.start} - {item.end}
                </span>
              </p>
            </div>
          </div>
        ))}

        <a
          href="https://linkedin.com/in/jooseparrak"
          target="_blank"
          rel="noreferrer"
          className="w-fit flex justify-center items-center mt-16 ml-11 px-4 py-2 text-sm font-medium md:px-4 md:py-2 md:text-base hover:opacity-90 duration-150 uppercase bg-[#ECECEC] text-[#232323]"
          aria-label="View resume"
        >
          <span className="mr-4">
            <Image
              src="https://ik.imagekit.io/c0wz4am8etl/Arrak_Portfolio/linkedin_8ds_suOKj.png"
              alt="in"
              width={32}
              height={32}
            />
          </span>
          Full Resume
        </a>
      </motion.div>
    </div>
  );
}

export default Experience;
