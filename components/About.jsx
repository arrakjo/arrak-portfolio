import { Parallax } from "react-scroll-parallax";

function About() {
  return (
    <section className="w-full min-h-screen p-5 flex flex-col md:flex-row gap-5 items-center justify-center">
      <Parallax speed={-10} translateY={[-50, 50]}>
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
      </Parallax>
    </section>
  );
}

export default About;
