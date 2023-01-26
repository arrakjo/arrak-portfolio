import Slider from "./Slider";

function Projects({ data }) {
  return (
    <section className="w-full min-h-screen mt-40 pt-48">
      <p className="text-7xl text-center mb-10">What I&apos;ve done</p>
      <Slider data={data} />
    </section>
  );
}

export default Projects;
