import Carousel from "better-react-carousel";
import Image from "next/image";

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
      gap={0}
      loop
      showDots={true}
      containerStyle={styles}
    >
      {data.map((item) => (
        <Carousel.Item key={item.id}>
          <div className="w-full h-full min-h-[400px] flex flex-col md:flex-row md:items-center flex-nowrap">
            <div className="relative flex-1 h-full">
              <Image
                src={item.image[0].url}
                layout="fill"
                objectFit="cover"
                alt={item.name}
                className="m-4 rounded-lg select-none pointer-events-none"
              />
            </div>

            <div className="flex-1 p-5 h-full overflow-auto">
              <p className="text-3xl">{item.name}</p>
              <p>{item.description}</p>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;
