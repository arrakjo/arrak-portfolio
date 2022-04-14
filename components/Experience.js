import Image from "next/image";
import { motion } from "framer-motion";

function Experience() {
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
          src="https://ik.imagekit.io/c0wz4am8etl/Arrak_Portfolio/Experience_DN-8oVY_X.png"
          alt="Experience"
          width={555}
          height={413}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="w-full xl:w-1/2 2xl:pl-20 h-full flex flex-col justify-center"
      >
        <div className="px-10">
          <p className="text-base mb-[22px] ">
            <span className="font-bold text-[#F1F1F1] ">/</span> Experience
          </p>
        </div>
        <div className="flex w-full px-5">
          {/* XP "bar" CSS */}
          <div className="">
            <div className="w-3 h-3 bg-[#ECECEC] rounded-full mt-2 ml-5 "></div>
            <div className="w-16 h-0.5 bg-[#ECECEC] rotate-90 ml-[-6px] mt-7 "></div>
          </div>
          {/* Position */}
          <div>
            <h3 className="text-sm md:text-lg lg:text-2xl">
              Business Support Specialist &#38; Product Expert
            </h3>
            <p className="text-xs mt-2">
              Wise (formerly TransferWise)<span className="ml-2">—</span>
              <span className="text-[#656565] ml-2">Apr 2021 - Present</span>
            </p>
          </div>
        </div>
        <div className="flex w-full px-5 mt-10">
          {/* XP "bar" CSS */}
          <div className="">
            <div className="w-3 h-3 bg-[#ECECEC] rounded-full mt-2 ml-5 "></div>
            <div className="w-16 h-0.5 bg-[#ECECEC] rotate-90 ml-[-6px] mt-7 "></div>
          </div>
          {/* Position */}
          <div>
            <h3 className="text-sm md:text-lg lg:text-2xl">
              Front Office Service Manager
            </h3>
            <p className="text-xs mt-2">
              Original Sokos Hotel Viru<span className="ml-2">—</span>
              <span className="text-[#656565] ml-2">Apr 2017 - Jul 2020</span>
            </p>
          </div>
        </div>
        <div className="flex w-full px-5 mt-10">
          {/* XP "bar" CSS */}
          <div className="">
            <div className="w-3 h-3 bg-[#ECECEC] rounded-full mt-2 ml-5 "></div>
            <div className="w-16 h-0.5 bg-[#ECECEC] rotate-90 ml-[-6px] mt-7 "></div>
          </div>
          {/* Position */}
          <div>
            <h3 className="text-sm md:text-lg lg:text-2xl">Delivery Driver</h3>
            <p className="text-xs mt-2">
              FoodHunt OÜ<span className="ml-2">—</span>
              <span className="text-[#656565] ml-2">Apr 2016 - Jan 2017</span>
            </p>
          </div>
        </div>
        <div className="flex w-full px-5 mt-10">
          {/* XP "bar" CSS */}
          <div className="">
            <div className="w-3 h-3 bg-[#ECECEC] rounded-full mt-2 ml-5 "></div>
            <div className="w-16 h-0.5 bg-[#ECECEC] rotate-90 ml-[-6px] mt-7 "></div>
          </div>
          {/* Position */}
          <div>
            <h3 className="text-sm md:text-lg lg:text-2xl">Porter</h3>
            <p className="text-xs mt-2">
              Original Sokos Hotel Viru<span className="ml-2">—</span>
              <span className="text-[#656565] ml-2">Jul 2015 - Jan 2016</span>
            </p>
          </div>
        </div>
        <button
          onClick={() =>
            window.open("https://linkedin.com/in/jooseparrak", "_blank")
          }
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
        </button>
      </motion.div>
    </div>
  );
}

export default Experience;
