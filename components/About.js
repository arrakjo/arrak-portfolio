import Image from "next/image";

function About() {
  return (
    <div
      id="about"
      className="flex justify-center items-center bg-[#ECECEC] text-[#232323] w-full h-full md:py-48 py-32"
    >
      <div className="w-full xl:w-1/2 2xl:pl-40 h-full flex flex-col items-center justify-center">
        <div className="w-full xl:w-2/3 px-10">
          <p className="text-base mb-[22px] ">
            <span className="font-bold text-[#111111] ">/</span> About me
          </p>
          <p className="text-xl md:text-3xl font-medium mb-5 md:mb-6">
            I&apos;m from <span className="text-[#466EC3] ">Estonia</span>{" "}
            <span>
              <Image
                src="https://ik.imagekit.io/c0wz4am8etl/Arrak_Portfolio/estonia.png"
                alt="EE"
                width="36px"
                height="36px"
              />
            </span>
          </p>
          <p className="text-xl md:text-3xl font-medium mb-5 md:mb-6">
            Self-taught
            <br />
            <span className="text-[#466EC3] ">Frontend Developer</span>.
          </p>
          <p className="text-xl md:text-3xl font-medium mb-5 md:mb-6">
            Specialized with <span className="text-[#466EC3] ">React</span>.
          </p>
          <p className="text-xl md:text-3xl font-medium mb-5 md:mb-6">
            I build &#38; design stuff.
          </p>
          <p className="text-xl md:text-3xl font-medium mb-5 md:mb-6 md:pt-3 md:leading-4">
            I also create —<br />
            sing and play guitar{" "}
            <span>
              <Image
                src="https://ik.imagekit.io/c0wz4am8etl/Arrak_Portfolio/guitar.png"
                alt="Guitar"
                width="36px"
                height="36px"
              />
            </span>
          </p>

          {/* Ellipse image, only visible on smaller screens */}
          <div className="flex lg:hidden mt-10">
            <Image
              src="https://ik.imagekit.io/c0wz4am8etl/Arrak_Portfolio/Live_alt.png"
              alt="Live alt"
              width="154px"
              height="154px"
            />
          </div>

          <div className="mt-10 md:mt-14">
            <a
              className="uppercase cursor-pointer bg-[#232323] text-[#ECECEC] p-4 text-sm font-medium md:p-4 md:text-base hover:opacity-90 duration-150"
              href="https://linkedin.com/in/jooseparrak"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
      {/* Full image, only visible on larger screens */}
      <div className="w-1/2 hidden lg:flex items-center justify-center pr-16">
        <Image
          src="https://ik.imagekit.io/c0wz4am8etl/Arrak_Portfolio/Live.jpg"
          alt="Live Performance"
          width="387px"
          height="580px"
        />
      </div>
    </div>
  );
}

export default About;