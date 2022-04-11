import Image from "next/image";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col justify-center items-center bg-[#ECECEC] text-[#232323] w-full h-full md:py-48 py-32"
    >
      <div className="flex lg:w-2/3 w-full justify-center items-center">
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-base mb-[22px] "
        >
          <span className="font-bold text-[#111111] ">/</span> Projects
        </motion.p>
      </div>

      <div className="w-fit px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div
            className="cursor-pointer w-[300px] m-3 transition duration-150 shadow-lg hover:shadow-xl"
            onClick={() =>
              window.open("https://characts.vercel.app/", "_blank")
            }
          >
            <div className="bg-[#F9F9F9] w-[300px] h-[170px] rounded-t-md flex justify-center items-center ">
              <Image
                src="https://ik.imagekit.io/c0wz4am8etl/Arrak_Portfolio/Characts_1_a--J-PLRW.png"
                alt="Characts"
                width={184}
                height={32}
              />
            </div>
            <div className="flex flex-col p-3 bg-[#F3F3F3] w-[300px] h-fit rounded-b-md ">
              <h3 className="text-base font-medium">Characts</h3>
              <p className="text-xs uppercase text-[#666666] mt-1">
                Next.js / Tailwind / Sanity / Vercel
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div
            className="cursor-pointer w-[300px] m-3 transition duration-150 shadow-lg hover:shadow-xl"
            onClick={() => window.open("https://mojoapp.eu/en", "_blank")}
          >
            <div className="bg-[#F9F9F9] w-[300px] h-[170px] rounded-t-md flex justify-center items-center ">
              <Image
                src="https://ik.imagekit.io/c0wz4am8etl/Arrak_Portfolio/Mojo_1_B3UHBqMMa.png"
                alt="Mojo"
                width={96}
                height={96}
              />
            </div>
            <div className="flex flex-col p-3 bg-[#F3F3F3] w-[300px] h-fit rounded-b-md ">
              <h3 className="text-base font-medium">Mojo</h3>
              <p className="text-xs uppercase text-[#666666] mt-1">Wordpress</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div
            className="cursor-pointer w-[300px] m-3 transition duration-150 shadow-lg hover:shadow-xl"
            onClick={() => window.open("https://shop.mojoapp.eu/", "_blank")}
          >
            <div className="bg-[#F9F9F9] w-[300px] h-[170px] rounded-t-md flex justify-center items-center ">
              <Image
                src="https://ik.imagekit.io/c0wz4am8etl/Arrak_Portfolio/epood_1_tNiBLsS9n.png"
                alt="Mojo ePood"
                width={186}
                height={55}
              />
            </div>
            <div className="flex flex-col p-3 bg-[#F3F3F3] w-[300px] h-fit rounded-b-md ">
              <h3 className="text-base font-medium">Mojo Store</h3>
              <p className="text-xs uppercase text-[#666666] mt-1">
                Wordpress / WooCommerce
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div
            className="cursor-pointer w-[300px] m-3 transition duration-150 shadow-lg hover:shadow-xl"
            onClick={() => window.open("https://picby.vercel.app/", "_blank")}
          >
            <div className="bg-[#F9F9F9] w-[300px] h-[170px] rounded-t-md flex justify-center items-center ">
              <Image
                src="https://ik.imagekit.io/c0wz4am8etl/Arrak_Portfolio/picby_1_zX7wBOl4J.png"
                alt="Picby"
                width={121}
                height={66}
              />
            </div>
            <div className="flex flex-col p-3 bg-[#F3F3F3] w-[300px] h-fit rounded-b-md ">
              <h3 className="text-base font-medium">Pibcy</h3>
              <p className="text-xs uppercase text-[#666666] mt-1">
                Next.js / Tailwind / Firebase / Vercel
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div
            className="cursor-pointer w-[300px] m-3 transition duration-150 shadow-lg hover:shadow-xl"
            onClick={() => window.open("https://rantit.netlify.app/", "_blank")}
          >
            <div className="bg-[#F9F9F9] w-[300px] h-[170px] rounded-t-md flex justify-center items-center ">
              <Image
                src="https://ik.imagekit.io/c0wz4am8etl/Arrak_Portfolio/Rantit_1_WEItdaqtL.png"
                alt="Rantit"
                width={130}
                height={56}
              />
            </div>
            <div className="flex flex-col p-3 bg-[#F3F3F3] w-[300px] h-fit rounded-b-md ">
              <h3 className="text-base font-medium">Rantit</h3>
              <p className="text-xs uppercase text-[#666666] mt-1">
                Next.js / Tailwind / Firebase
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div
            className="cursor-pointer w-[300px] m-3 transition duration-150 shadow-lg hover:shadow-xl"
            onClick={() => window.open("https://kejoree.eu", "_blank")}
          >
            <div className="bg-[#F9F9F9] w-[300px] h-[170px] rounded-t-md flex justify-center items-center ">
              <Image
                src="https://ik.imagekit.io/c0wz4am8etl/Arrak_Portfolio/Kejoree_1_hxEb-SBJfG.png"
                alt="Kejoree"
                width={164}
                height={70}
              />
            </div>
            <div className="flex flex-col p-3 bg-[#F3F3F3] w-[300px] h-fit rounded-b-md ">
              <h3 className="text-base font-medium">Kejoree</h3>
              <p className="text-xs uppercase text-[#666666] mt-1">
                Wordpress / WooCommerce
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
