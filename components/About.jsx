import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import Profile from "../public/img/itsame.jpg";
import ThisIsMe from "../public/img/thisisme.svg";

function About() {
  return (
    <section className="w-full min-h-screen p-5 flex flex-col md:flex-row gap-5 items-center justify-center">
      <Parallax
        speed={-10}
        translateY={[-50, 50]}
        scale={[0.7, 1.2]}
        rotateX={[-65, 65]}
      >
        <div className="text-3xl md:text-5xl font-light w-full max-w-2xl">
          <span className="block mb-5">Hi there 👋</span>
          <p className="leading-tight">
            My name is{" "}
            <span className="gradient-secondary font-normal">Joosep Arrak</span>
            , and I&apos;m a{" "}
            <span className="gradient-secondary font-normal">
              Frontend Developer
            </span>{" "}
            based in{" "}
            <span className="gradient-secondary font-normal">
              Tallinn, Estonia
            </span>
          </p>
        </div>
        <div className="relative w-full">
          <div className="relative w-36 h-36 md:w-48 md:h-48 mt-8">
            <Image
              src={Profile}
              alt="Profile Picture"
              layout="fill"
              className="object-cover rounded-full select-none pointer-events-none"
            />
          </div>
          <div className="absolute w-48 md:w-96 h-24 -bottom-24 left-16 md:-bottom-20 md:left-28">
            <div className="relative w-full h-full">
              <Image
                src={ThisIsMe}
                alt="This is me"
                layout="fill"
                className="select-none pointer-events-none"
              />
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  );
}

export default About;
