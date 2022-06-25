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
      <div className="w-fit px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectData.slice(0, 6).map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div
              className="cursor-pointer w-[300px] m-3 rounded-md transition duration-150 shadow-lg hover:shadow-xl"
              onClick={() => window.open(item.url, "_blank")}
            >
              <div className="bg-[#F9F9F9] w-[300px] h-[192px] relative rounded-t-md flex justify-center items-center ">
                <Image
                  src={item.image[0].url}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-md"
                  priority
                />
              </div>
              <div className="flex flex-col p-3 bg-[#F3F3F3] w-[300px] h-fit rounded-b-md ">
                <h3 className="text-base font-medium">{item.name}</h3>
                <p className="text-xs uppercase text-[#666666] mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
