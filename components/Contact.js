import Image from "next/image";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div
      id="contact"
      className="flex justify-center items-center bg-[#ECECEC] text-[#232323] w-full h-full md:py-48 py-32"
    >
      <div className="w-full xl:w-1/2 2xl:pl-40 h-full flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="w-full xl:w-2/3 px-10"
        >
          <p className="text-base mb-[22px] ">
            <span className="font-bold text-[#111111] ">/</span> Contact
          </p>
          <p className="text-xl md:text-3xl font-medium mb-5 md:mb-6 relative">
            Say hello!
            <span className="absolute top-[-112px] right-1 sm:right-20 lg:hidden inline ">
              <Image
                src="https://ik.imagekit.io/c0wz4am8etl/Arrak_Portfolio/profile_0t6ZuwWdw.jpg"
                alt="Live alt"
                width="154px"
                height="154px"
                className="rounded-full scale-75 sm:scale-100"
              />
            </span>
          </p>

          <div>
            <div className="flex items-center text-base mb-4">
              <Image
                src="https://ik.imagekit.io/c0wz4am8etl/Arrak_Portfolio/email_g4naarauP.png"
                alt="Email"
                width={36}
                height={36}
              />
              <a href="mailto:jooseparrak@hotmail.com" className="ml-6">
                jooseparrak@hotmail.com
              </a>
            </div>
            <div className="flex items-center text-base mb-4">
              <Image
                src="https://ik.imagekit.io/c0wz4am8etl/Arrak_Portfolio/linkedin_8ds_suOKj.png"
                alt="LinkedIn"
                width={36}
                height={36}
              />
              <a
                href="https://linkedin.com/in/jooseparrak"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-6 hidden md:inline"
              >
                linkedin.com/in/jooseparrak
              </a>
              <a
                href="https://linkedin.com/in/jooseparrak"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-6 md:hidden inline"
              >
                lnkdn.com/jooseparrak
              </a>
            </div>
            <div className="flex items-center text-base mb-4">
              <Image
                src="https://ik.imagekit.io/c0wz4am8etl/Arrak_Portfolio/github_XMvUX-zy3.png"
                alt="GitHub"
                width={36}
                height={36}
              />
              <a
                href="https://github.com/arrakjo"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-6"
              >
                github.com/arrakjo
              </a>
            </div>

            <div className="pt-16">
              <h4 className="text-lg md:text-2xl font-medium">
                I&apos;ve built this page using
              </h4>
              <p className="text-xs uppercase mt-2">
                Next.js / Tailwind / GraphCMS / Vercel
              </p>
            </div>

            <footer className="text-sm mt-16">&copy; Joosep Arrak 2022</footer>
          </div>
        </motion.div>
      </div>
      {/* Full image, only visible on larger screens */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="w-1/2 hidden lg:flex items-center justify-center pr-16"
      >
        <Image
          src="https://ik.imagekit.io/c0wz4am8etl/Arrak_Portfolio/justme.jpg"
          alt="Just me"
          width={387}
          height={580}
        />
      </motion.div>
    </div>
  );
}

export default Contact;
