import Image from "next/image";
import { motion } from "framer-motion";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

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

      {/* Map the projects data and render the Swiper slider & slides */}
      <div className="w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            navigation={true}
            grabCursor={true}
            className="w-full max-w-6xl mx-auto h-[570px] md:h-[470px]"
          >
            {projectData.map((item) => (
              <SwiperSlide
                key={item.id}
                className="h-[570px] md:h-[470px] bg-[#F9F9F9] overflow-hidden md:rounded"
              >
                <div className="w-full h-full md:flex md:flex-nowrap md:items-center">
                  <div className="w-full md:w-2/3 h-64 md:h-full relative md:absolute md:top-0 md:left-0 md:bottom-0">
                    <Image
                      src={item.image[0].url}
                      alt={item.name}
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full"
                      priority
                    />
                  </div>
                  <div className="w-full md:w-1/3 flex flex-col px-4 py-16 md:p-4 md:absolute md:top-1/2 md:-translate-y-1/2 md:right-0">
                    <h3 className="text-3xl font-semibold opacity-90">
                      {item.name}
                    </h3>
                    <p className="text-xs uppercase text-[#333] mt-1">
                      {item.description}
                    </p>
                    <div className="w-full flex py-5 gap-3 items-center rounded-b-md">
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
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* Map the projects data and render the components */}
      {/* <div className="w-fit px-4 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
      </div> */}
    </div>
  );
}

export default Projects;
