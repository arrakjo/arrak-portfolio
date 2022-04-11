import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Header from "../components/Header";
import HomeScreen from "../components/HomeScreen";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="bg-[#232323] h-full text-[#ECECEC]">
      <Head>
        <title>Joosep Arrak | Frontend Developer</title>
        <meta
          name="description"
          content="Arrak.dev | Personal Portfolio of Joosep Arrak"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <HomeScreen />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}
