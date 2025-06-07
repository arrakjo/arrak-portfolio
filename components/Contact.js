import { AtIcon } from "@phosphor-icons/react/dist/csr/At";
import { GithubLogoIcon } from "@phosphor-icons/react/dist/csr/GithubLogo";
import { LinkedinLogoIcon } from "@phosphor-icons/react/dist/csr/LinkedinLogo";
import Image from "next/legacy/image";

export default function Contact() {
  return (
    <div
      id="contact"
      className="flex justify-center items-center bg-[#FFFAEA] text-[#17191a] w-full h-full md:py-48 py-32"
    >
      <div className="w-full xl:w-1/2 2xl:pl-40 h-full flex flex-col items-center justify-center">
        <div className="w-full xl:w-2/3 px-10">
          <p className="text-base mb-[22px] ">
            <span className="font-light text-[#111111] ">/</span> Contact
          </p>
          <p className="text-xl md:text-3xl font-light mb-5 md:mb-6 relative">
            Say hello!
            <span className="absolute top-[-112px] right-1 sm:right-20 lg:hidden inline ">
              <Image
                src="https://ik.imagekit.io/c0wz4am8etl/Arrak_Portfolio/profile_0t6ZuwWdw.jpg"
                alt="Live alt"
                width={154}
                height={154}
                className="rounded-full scale-75 sm:scale-100"
              />
            </span>
          </p>

          <div>
            <div className="flex items-center text-base mb-4">
              <AtIcon size={36} />
              <a href="mailto:jooseparrak@gmail.com" className="ml-6">
                jooseparrak@gmail.com
              </a>
            </div>
            <div className="flex items-center text-base mb-4">
              <LinkedinLogoIcon size={36} />
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
              <GithubLogoIcon size={36} />
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
              <h4 className="text-lg md:text-2xl font-light">
                I&apos;ve built this page using
              </h4>
              <p className="text-xs uppercase mt-2">
                Next.js / Tailwind / GraphQL / Hygraph / Vercel
              </p>
            </div>

            <footer className="text-sm mt-16">
              &copy; Joosep Arrak {new Date().getFullYear()}
            </footer>
          </div>
        </div>
      </div>
      {/* Full image, only visible on larger screens */}
      <div className="w-1/2 hidden lg:flex items-center justify-center pr-16">
        <Image
          src="https://ik.imagekit.io/c0wz4am8etl/Arrak_Portfolio/justme.jpg"
          alt="Just me"
          width={387}
          height={580}
        />
      </div>
    </div>
  );
}
