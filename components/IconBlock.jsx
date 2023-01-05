import { Parallax } from "react-scroll-parallax";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJsSquare,
  faDrupal,
  faWordpressSimple,
  faHtml5,
  faCss3,
  faSass,
  faGithub,
  faBitbucket,
  faAtlassian,
  faSlack,
  faNode,
  faNpm,
  faYarn,
  faMicrosoft,
  faUbuntu,
  faStripe,
  faGoogle,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";

function IconBlock() {
  return (
    <section className="w-full h-[200vh] max-w-5xl mx-auto relative opacity-60">
      <Parallax
        speed={-100}
        translateY={[-250, 250]}
        className="absolute top-[30%] left-[10%]"
      >
        <FontAwesomeIcon
          icon={faReact}
          className="text-5xl md:text-7xl text-[#61DAFB]"
        />
      </Parallax>

      <Parallax
        speed={-10}
        translateY={[-300, 300]}
        className="absolute top-1/2 left-2/3"
      >
        <FontAwesomeIcon
          icon={faJsSquare}
          className="text-6xl md:text-8xl text-[#FCDC00]"
        />
      </Parallax>

      <Parallax
        speed={-10}
        translateY={[-200, 200]}
        className="absolute top-1/4 right-10"
      >
        <FontAwesomeIcon
          icon={faHtml5}
          className="text-5xl md:text-7xl text-[#E44D26]"
        />
      </Parallax>

      <Parallax
        speed={-10}
        translateY={[-200, 200]}
        className="absolute bottom-2/4 left-7"
      >
        <FontAwesomeIcon
          icon={faDrupal}
          className="text-4xl md:text-5xl text-blue-500"
        />
      </Parallax>

      <Parallax
        speed={-10}
        translateY={[-200, 200]}
        className="absolute bottom-1/4 right-4"
      >
        <FontAwesomeIcon
          icon={faWordpressSimple}
          className="text-3xl text-blue-400"
        />
      </Parallax>

      <Parallax
        speed={-100}
        translateY={[-50, 50]}
        className="absolute top-2/3 right-1/3"
      >
        <FontAwesomeIcon
          icon={faCss3}
          className="text-5xl md:text-7xl text-[#214CE5]"
        />
      </Parallax>

      <Parallax
        speed={-1000}
        translateY={[-250, 250]}
        className="absolute bottom-1/3 left-1/3"
      >
        <FontAwesomeIcon
          icon={faSass}
          className="text-4xl md:text-5xl text-[#BF4080]"
        />
      </Parallax>

      <Parallax
        speed={-200}
        translateY={[-300, 300]}
        className="absolute bottom-1/2 left-1/2"
      >
        <FontAwesomeIcon icon={faGithub} className="text-3xl md:text-4xl" />
      </Parallax>

      <Parallax
        speed={-500}
        translateY={[-200, 200]}
        className="absolute bottom-3/4 right-1/3"
      >
        <FontAwesomeIcon
          icon={faBitbucket}
          className="text-2xl md:text-3xl text-[#2684FF]"
        />
      </Parallax>

      <Parallax
        speed={-10}
        translateY={[-400, 400]}
        className="absolute top-2/3 left-3"
      >
        <FontAwesomeIcon icon={faUbuntu} className="text-2xl text-[#DD4814]" />
      </Parallax>

      <Parallax
        speed={-10}
        translateY={[-320, 320]}
        className="absolute bottom-2/3 right-2/4"
      >
        <FontAwesomeIcon icon={faSlack} className="text-2xl text-[#E9AD00]" />
      </Parallax>

      <Parallax
        speed={-300}
        translateY={[-200, 200]}
        className="absolute bottom-[20%] right-[20%]"
      >
        <FontAwesomeIcon
          icon={faFigma}
          className="text-4xl md:text-5xl text-[#BFB4F2]"
        />
      </Parallax>

      <Parallax
        speed={-100}
        translateY={[-275, 275]}
        className="absolute bottom-[40%] right-[5%]"
      >
        <FontAwesomeIcon
          icon={faGoogle}
          className="text-3xl md:text-4xl text-[#34A853]"
        />
      </Parallax>

      <Parallax
        speed={-10}
        translateY={[-10, 10]}
        className="absolute top-[35%] right-[15%]"
      >
        <FontAwesomeIcon
          icon={faStripe}
          className="text-2xl md:text-3xl text-[#6772E5]"
        />
      </Parallax>

      <Parallax
        speed={-10}
        translateY={[-7, 7]}
        className="absolute bottom-[20%] left-[22%]"
      >
        <FontAwesomeIcon
          icon={faMicrosoft}
          className="text-2xl md:text-3xl text-[#0079D5]"
        />
      </Parallax>

      <Parallax
        speed={-150}
        translateY={[-175, 175]}
        className="absolute top-[24%] left-[24%]"
      >
        <FontAwesomeIcon
          icon={faNpm}
          className="text-2xl md:text-3xl text-[#C53635]"
        />
      </Parallax>

      <Parallax
        speed={-75}
        translateY={[-75, 75]}
        className="absolute top-[40%] left-[29%]"
      >
        <FontAwesomeIcon
          icon={faYarn}
          className="text-2xl md:text-3xl text-[#2C8EBB]"
        />
      </Parallax>

      <Parallax
        speed={-400}
        translateY={[-10, 10]}
        className="absolute top-[45%] right-[21%]"
      >
        <FontAwesomeIcon
          icon={faAtlassian}
          className="text-2xl md:text-3xl text-[#0050CB]"
        />
      </Parallax>

      <Parallax
        speed={-75}
        translateY={[-500, 500]}
        className="absolute top-[50%] left-[25%]"
      >
        <FontAwesomeIcon
          icon={faNode}
          className="text-2xl md:text-3xl text-[#3F873F]"
        />
      </Parallax>
    </section>
  );
}

export default IconBlock;
