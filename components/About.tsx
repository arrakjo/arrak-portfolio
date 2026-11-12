import Image from "next/image";
import ResumeButton from "./ResumeButton";

export default function About() {
  return (
    <div
      id="about"
      className="flex justify-center items-center bg-[#FFFAEA] text-[#17191a] w-full h-full md:py-48 py-32"
    >
      <div className="w-full xl:w-1/2 2xl:pl-40 h-full flex flex-col items-center justify-center">
        <div className="w-full xl:w-2/3 px-10">
          <p className="text-base mb-5.5">
            <span className="font-medium text-[#111111] ">/</span> About me
          </p>
          <p className="text-xl md:text-2xl font-light mb-5 md:mb-6">
            I&apos;m from <span className="font-medium">Estonia</span>,
            <br />
            working remotely.
          </p>
          <p className="text-xl md:text-2xl font-light mb-5 md:mb-6">
            <span className="font-medium ">Software Engineer</span>,
            <br />
            frontend first.
          </p>
          <p className="text-xl md:text-2xl font-light mb-5 md:mb-6">
            Building with
            <br />
            <span className="font-medium ">React, TypeScript & Node.js</span>.
          </p>
          <p className="text-xl md:text-2xl font-light mb-5 md:mb-6">
            <span className="font-medium ">AI-native</span>: using Claude Code &
            <br />
            AI-tooling to plan, build and review.
          </p>
          <p className="text-xl md:text-2xl font-light mb-5 md:mb-6">
            Self-taught.
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
            <ResumeButton className="mt-16" />
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
