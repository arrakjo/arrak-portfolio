import Image from "next/legacy/image";

export default function About() {
  return (
    <div
      id="about"
      className="flex justify-center items-center bg-[#FFFAEA] text-[#052B2F] w-full h-full md:py-48 py-32"
    >
      <div className="w-full xl:w-1/2 2xl:pl-40 h-full flex flex-col items-center justify-center">
        <div className="w-full xl:w-2/3 px-10">
          <p className="text-base mb-[22px] ">
            <span className="font-bold text-[#111111] ">/</span> About me
          </p>
          <p className="text-xl md:text-2xl font-medium mb-5 md:mb-6">
            I&apos;m from <span className="text-[#466EC3]">Estonia</span>.
          </p>
          <p className="text-xl md:text-2xl font-medium mb-5 md:mb-6">
            Self-taught
            <br />
            <span className="text-[#466EC3] ">Software Engineer</span>.
          </p>
          <p className="text-xl md:text-2xl font-medium mb-5 md:mb-6">
            Specialized with
            <br />
            <span className="text-[#466EC3] ">React & TypeScript</span>.
          </p>
          <p className="text-xl md:text-2xl font-medium mb-5 md:mb-6">
            I build &#38; design stuff.
          </p>
          <p className="text-xl md:text-2xl font-medium mb-5 md:mb-6">
            Also interested in game development.
          </p>

          {/* Ellipse image, only visible on smaller screens */}
          <div className="flex lg:hidden mt-10">
            <Image
              src="https://ik.imagekit.io/c0wz4am8etl/Arrak_Portfolio/Live_alt.png"
              alt="Live alt"
              width={154}
              height={154}
            />
          </div>

          <div className="mt-10 md:mt-14">
            <a
              href="https://linkedin.com/in/jooseparrak"
              target="_blank"
              rel="noreferrer"
              className="uppercase cursor-pointer bg-[#052B2F] text-[#FFFAEA] p-4 text-sm font-medium md:text-base hover:bg-[#111] duration-150"
              aria-label="View resume"
            >
              Full Resume
            </a>
          </div>
        </div>
      </div>
      {/* Full image, only visible on larger screens */}
      <div className="w-1/2 hidden lg:flex items-center justify-center pr-16">
        <Image
          src="https://ik.imagekit.io/c0wz4am8etl/Arrak_Portfolio/Live.jpg"
          alt="Live Performance"
          width={387}
          height={580}
        />
      </div>
    </div>
  );
}
