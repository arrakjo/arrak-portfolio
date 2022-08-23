import Image from "next/image";
import { motion } from "framer-motion";

function Projects({ projectData }) {
  return (
    <div
      id="projects"
      className="flex flex-col justify-center items-center bg-[#ECECEC] text-[#232323] w-full h-full md:py-48 py-32"
    >
      <div className="flex lg:w-2/3 w-full justify-center items-center">
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-base mb-[22px] "
        >
          <span className="font-bold text-[#111111] ">/</span> Projects
        </motion.p>
      </div>

      {/* Map the projects data and render the components */}
      <div className="w-fit px-4 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectData.slice(0, 9).map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="w-[300px] rounded-md transition duration-150 shadow-lg hover:shadow-xl">
              <div className="bg-[#F9F9F9] w-full h-48 relative rounded-t-md flex justify-center items-center ">
                <Image
                  src={item.image[0].url}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-md"
                  priority
                />
              </div>
              <div className="flex flex-col p-3 bg-[#F3F3F3] w-full h-fit">
                <h3 className="text-base font-semibold opacity-90">
                  {item.name}
                </h3>
                <p className="text-xs uppercase text-[#666666] mt-1">
                  {item.description}
                </p>
              </div>
              <div className="w-full flex p-3 pt-1 bg-[#F3F3F3] gap-3 items-center rounded-b-md">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-2/5 flex justify-center items-center px-4 py-2 text-xs font-medium md:px-4 md:py-2 md:text-sm hover:opacity-90 duration-150 uppercase border-2 border-[#333] bg-[#333] text-[#ECECEC]"
                  aria-label="View live site"
                >
                  Live
                </a>
                {item.sourceUrl && (
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-2/5 flex justify-center items-center px-4 py-2 text-xs font-medium md:px-4 md:py-2 md:text-sm duration-150 uppercase border-2 border-[#333] text-[#333] hover:bg-[#F7F7F7] hover:border-[#444]"
                    aria-label="View source files"
                  >
                    Source
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
