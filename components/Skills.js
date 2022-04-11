import Image from "next/image";

function Skills() {
  return (
    <div
      id="about"
      className="flex justify-center items-center bg-[#232323] text-[#ECECEC] w-full h-full md:py-48 py-32"
    >
      <div className="w-1/2 xl:pl-40 hidden xl:flex items-center justify-center pr-16">
        <Image
          src="https://ik.imagekit.io/c0wz4am8etl/Arrak_Portfolio/Skills_j0wOx0rBo.png"
          alt="Skills"
          width="568px"
          height="413px"
        />
      </div>

      <div className="w-full xl:w-1/2 2xl:pl-40 h-full flex flex-col items-center justify-center">
        <div className="px-10">
          <p className="text-base mb-[22px] ">
            <span className="font-bold text-[#F1F1F1] ">/</span> Skills
          </p>
          <div>
            <h3 className="text-2xl md:text-4xl font-medium mb-2 md:mb-3">
              Tech.
            </h3>
            <div className="flex w-full md:w-2/3 flex-wrap">
              <p className="uppercase text-sm md:text-base border flex justify-center items-center w-max mr-4 mt-4 border-[#ececec] py-2 px-3 ">
                Next.js
              </p>
              <p className="uppercase text-sm md:text-base border flex justify-center items-center w-max mr-4 mt-4 border-[#ececec] py-2 px-3 ">
                React.js
              </p>
              <p className="uppercase text-sm md:text-base border flex justify-center items-center w-max mr-4 mt-4 border-[#ececec] py-2 px-3 ">
                JavaScript
              </p>
              <p className="uppercase text-sm md:text-base border flex justify-center items-center w-max mr-4 mt-4 border-[#ececec] py-2 px-3 ">
                HTML/CSS
              </p>
              <p className="uppercase text-sm md:text-base border flex justify-center items-center w-max mr-4 mt-4 border-[#ececec] py-2 px-3 ">
                Tailwind CSS
              </p>
              <p className="uppercase text-sm md:text-base border flex justify-center items-center w-max mr-4 mt-4 border-[#ececec] py-2 px-3 ">
                Styled Components
              </p>
              <p className="uppercase text-sm md:text-base border flex justify-center items-center w-max mr-4 mt-4 border-[#ececec] py-2 px-3 ">
                React Native
              </p>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-2xl md:text-4xl font-medium mb-2 md:mb-3">
              Cloud.
            </h3>
            <div className="flex w-full md:w-2/3 flex-wrap">
              <p className="uppercase text-sm md:text-base border flex justify-center items-center w-max mr-4 mt-4 border-[#ececec] py-2 px-3 ">
                Firebase
              </p>
              <p className="uppercase text-sm md:text-base border flex justify-center items-center w-max mr-4 mt-4 border-[#ececec] py-2 px-3 ">
                Sanity CMS
              </p>
              <p className="uppercase text-sm md:text-base border flex justify-center items-center w-max mr-4 mt-4 border-[#ececec] py-2 px-3 ">
                Vercel
              </p>
              <p className="uppercase text-sm md:text-base border flex justify-center items-center w-max mr-4 mt-4 border-[#ececec] py-2 px-3 ">
                Google Cloud Platform
              </p>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-2xl md:text-4xl font-medium mb-2 md:mb-3">
              Design.
            </h3>
            <div className="flex w-full md:w-2/3 flex-wrap">
              <p className="uppercase text-sm md:text-base border flex justify-center items-center w-max mr-4 mt-4 border-[#ececec] py-2 px-3 ">
                Figma
              </p>
              <p className="uppercase text-sm md:text-base border flex justify-center items-center w-max mr-4 mt-4 border-[#ececec] py-2 px-3 ">
                Vectr
              </p>
              <p className="uppercase text-sm md:text-base border flex justify-center items-center w-max mr-4 mt-4 border-[#ececec] py-2 px-3 ">
                Adobe XD
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
