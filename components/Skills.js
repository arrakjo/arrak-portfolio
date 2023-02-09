import Image from "next/image";
import { motion } from "framer-motion";
import SkillsSVG from "../public/img/cli.svg";

const techSkills = [
  "Next.js",
  "React.js",
  "Javascript",
  "HTML",
  "CSS/SCSS",
  "Tailwind CSS",
  "Drupal",
  "WordPress",
];
const cloudSkills = [
  "Sanity CMS",
  "Hygraph",
  "Firebase",
  "Vercel",
  "Netlify",
  "Google Cloud Platform",
];
const toolSkills = [
  "Figma",
  "Git",
  "GitHub",
  "Bitbucket",
  "Jira",
  "Confluence",
];

function Skills() {
  return (
    <div
      id="skills"
      className="flex justify-center items-center bg-[#232323] text-[#ECECEC] w-full h-full md:py-48 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="w-1/2 xl:pl-40 hidden xl:flex items-center justify-center pr-16"
      >
        <Image src={SkillsSVG} alt="Skills" width={314} height={174} priority />
      </motion.div>

      <div className="w-full xl:w-1/2 2xl:pl-20 h-full flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="px-10"
        >
          <p className="text-base mb-[22px] ">
            <span className="font-bold text-[#F1F1F1] ">/</span> Skills
          </p>
          <div>
            <h3 className="text-2xl md:text-4xl font-medium mb-2 md:mb-3">
              Tech.
            </h3>
            <div className="flex w-full md:w-2/3 flex-wrap">
              {techSkills.map((i) => (
                <p
                  key={i}
                  className="uppercase text-sm md:text-base border flex justify-center items-center w-max mr-4 mt-4 border-[#ececec] py-2 px-3 "
                >
                  {i}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-2xl md:text-4xl font-medium mb-2 md:mb-3">
              Cloud.
            </h3>
            <div className="flex w-full md:w-2/3 flex-wrap">
              {cloudSkills.map((i) => (
                <p
                  key={i}
                  className="uppercase text-sm md:text-base border flex justify-center items-center w-max mr-4 mt-4 border-[#ececec] py-2 px-3 "
                >
                  {i}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-2xl md:text-4xl font-medium mb-2 md:mb-3">
              Tools.
            </h3>
            <div className="flex w-full md:w-2/3 flex-wrap">
              {toolSkills.map((i) => (
                <p
                  key={i}
                  className="uppercase text-sm md:text-base border flex justify-center items-center w-max mr-4 mt-4 border-[#ececec] py-2 px-3 "
                >
                  {i}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
