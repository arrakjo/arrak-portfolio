import { Parallax } from "react-scroll-parallax";

function Intro() {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="select-none pointer-events-none">
        <Parallax speed={-100} translateY={[-20, 20]} translateX={[25, -25]}>
          <h1 className="h1 gradient-secondary text-6xl md:text-9xl font-bold text-center mb-4">
            JOOSEP
          </h1>
        </Parallax>
        <Parallax speed={-500} translateY={[-200, 200]} translateX={[-25, 25]}>
          <p className="gradient-secondary text-2xl md:text-4xl font-medium text-center">
            Frontend Developer
          </p>
        </Parallax>
      </div>
    </section>
  );
}

export default Intro;
