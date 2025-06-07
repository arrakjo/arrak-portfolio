import Image from "next/legacy/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

export default function Projects({ projectData }) {
  return (
    <div
      id="projects"
      className="flex flex-col justify-center items-center bg-[#17191a] text-[#FFFAEA] w-full h-full md:py-48 py-32"
    >
      <div className="flex lg:w-2/3 w-full justify-center items-center">
        <p className="text-base mb-[22px] ">
          <span className="font-light text-[#FFFAEA] ">/</span> Projects
        </p>
      </div>

      {/* Map the projects data and render the Swiper slider & slides */}
      <div className="w-full h-full">
        <div>
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
                className="h-[570px] md:h-[470px] bg-[#222222] overflow-hidden md:rounded"
              >
                <div className="w-full h-full md:flex md:flex-nowrap md:items-center">
                  <div className="w-full md:w-2/3 h-64 md:h-full relative md:absolute md:top-0 md:left-0 md:bottom-0">
                    <Image
                      src={item.image[0].url}
                      alt={item.name}
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="w-full md:w-1/3 flex flex-col px-4 py-16 md:p-4 md:absolute md:top-1/2 md:-translate-y-1/2 md:right-0">
                    <h3 className="text-3xl font-light opacity-90">
                      {item.name}
                    </h3>
                    <p className="text-xs uppercase text-[#e3e3e3] mt-1">
                      {item.description}
                    </p>
                    <div className="w-full flex py-5 gap-3 items-center rounded-b-md">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="w-2/5 flex justify-center items-center px-4 py-2 text-xs font-light md:px-4 md:py-2 md:text-sm hover:border-white hover:bg-white duration-150 uppercase border border-[#FFFAEA] bg-[#FFFAEA] text-[#17191a]"
                        aria-label="View live site"
                      >
                        Live
                      </a>
                      {item.sourceUrl && (
                        <a
                          href={item.sourceUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="w-2/5 flex justify-center items-center px-4 py-2 text-xs font-light md:px-4 md:py-2 md:text-sm duration-150 uppercase border border-[#FFFAEA] text-[#FFFAEA] hover:bg-[#111] hover:border-[#FFFAEA]"
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
        </div>
      </div>
    </div>
  );
}
