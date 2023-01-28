import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "better-react-carousel";
import Image from "next/image";
import Link from "next/link";

function Slider({ data }) {
  const styles = {
    width: "100%",
    height: "100%",
    padding: "20px 0",
    borderRadius: "18px",
    backgroundColor: "#130102",
  };

  return (
    <Carousel
      cols={1}
      rows={1}
      gap={20}
      loop
      showDots={true}
      containerStyle={styles}
    >
      {data.slice(0, 7).map((item) => (
        <Carousel.Item key={item.id}>
          <div className="w-full h-full min-h-[768px] md:min-h-[400px] flex flex-col md:flex-row md:items-center flex-nowrap">
            <div className="relative flex-1 h-full max-h-52 md:max-h-max">
              <Image
                src={item.image[0].url}
                layout="fill"
                objectFit="cover"
                alt={item.name}
                className="m-4 rounded-lg select-none pointer-events-none"
              />
            </div>

            <div className="flex-1 flex flex-col gap-1 p-5 h-full overflow-auto">
              <p className="text-2xl mb-1 md:mb-3 gradient-secondary font-medium">
                {item.projectType}
              </p>
              <p className="text-3xl md:text-5xl">{item.name}</p>
              <p className="text-xl">Stack — {item.description}</p>

              {item.url && (
                <Link href={item.url} legacyBehavior aria-label="View live">
                  <a
                    href={item.url}
                    target="_blank"
                    className="mt-10 mb-2 text-xl font-semibold w-fit flex flex-row flex-nowrap items-center py-2 gap-2 hover:gap-4 duration-150"
                    rel="noreferrer"
                  >
                    <span>View live</span>
                    <span className="text-3xl">→</span>
                  </a>
                </Link>
              )}
              {item.sourceUrl && (
                <Link
                  href={item.sourceUrl}
                  legacyBehavior
                  aria-label="View source on GitHub"
                >
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    className="text-xl font-medium w-fit flex flex-row flex-nowrap gap-2 items-center px-6 py-2 border rounded-md bg-white text-black hover:opacity-90 duration-150"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} className="text-3xl" />
                    GitHub
                  </a>
                </Link>
              )}
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;
