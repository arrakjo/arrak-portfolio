import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div
      id="about"
      className="flex justify-center items-center bg-[#ECECEC] text-[#232323] w-full h-full md:py-48 py-32"
    >
      <div className="w-full xl:w-1/2 2xl:pl-40 h-full flex flex-col items-center justify-center">
        <div className="w-full xl:w-2/3 px-10">
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-base mb-[22px] "
          >
            <span className="font-bold text-[#111111] ">/</span> About me
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl font-medium mb-5 md:mb-6"
          >
            I&apos;m from <span className="text-[#466EC3]">Estonia</span>{" "}
            <span>
              <Image
                src="https://ik.imagekit.io/c0wz4am8etl/Arrak_Portfolio/estonia.png"
                alt="EE"
                width="36px"
                height="36px"
              />
            </span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl font-medium mb-5 md:mb-6"
          >
            Self-taught
            <br />
            <span className="text-[#466EC3] ">Software Engineer</span>.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl font-medium mb-5 md:mb-6"
          >
            Specialized with
            <br />
            <span className="text-[#466EC3] ">React & TypeScript</span>.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="text-xl md:text-2xl font-medium mb-5 md:mb-6"
          >
            I build &#38; design stuff.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-xl md:text-2xl font-medium mb-5 md:mb-6"
          >
            Also interested in game development
          </motion.p>

          {/* Ellipse image, only visible on smaller screens */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.0 }}
            className="flex lg:hidden mt-10"
          >
            <Image
              src="https://ik.imagekit.io/c0wz4am8etl/Arrak_Portfolio/Live_alt.png"
              alt="Live alt"
              width="154px"
              height="154px"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
            className="mt-10 md:mt-14"
          >
            <a
              href="https://linkedin.com/in/jooseparrak"
              target="_blank"
              rel="noreferrer"
              className="uppercase cursor-pointer bg-[#232323] text-[#ECECEC] p-4 text-sm font-medium md:text-base hover:bg-[#111] duration-150"
              aria-label="View resume"
            >
              Full Resume
            </a>
          </motion.div>
        </div>
      </div>
      {/* Full image, only visible on larger screens */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="w-1/2 hidden lg:flex items-center justify-center pr-16"
      >
        <Image
          src="https://ik.imagekit.io/c0wz4am8etl/Arrak_Portfolio/Live.jpg"
          alt="Live Performance"
          width="387px"
          height="580px"
        />
      </motion.div>
    </div>
  );
}
