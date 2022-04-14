import { MenuAlt1Icon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="flex z-10 w-full bg-[#232323] justify-between p-7 items-center border-b border-[#666666] fixed">
      <a href="#home" className="text-4xl font-medium">
        Arrak.
      </a>
      <div className="hidden lg:flex lg:space-x-14 lg:max-w-5xl lg:w-9/12 ">
        <a
          href="https://t.me/jooseparrak"
          target="_blank"
          rel="noopener noreferrer"
          className="text-base font-light"
        >
          t.me/jooseparrak
        </a>
        <a href="mailto:hello@arrak.dev" className="text-base font-light">
          hello@arrak.dev
        </a>
      </div>

      <button onClick={openMenu} aira-label="Open menu">
        <MenuAlt1Icon className="h-12 rotate-180 cursor-pointer" />
      </button>

      {menuOpen && (
        <div className="absolute z-50 top-0 right-0">
          <motion.nav
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            isOpen={menuOpen}
            className="md:w-96 w-72 h-screen bg-[#333333] flex flex-col justify-between py-7"
          >
            <div className="flex justify-end pr-7">
              <button onClick={closeMenu} aria-label="Close">
                <XIcon className="h-12 cursor-pointer" />
              </button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col pl-8 font-medium text-xl md:text-2xl space-y-3 md:space-y-4"
            >
              <a
                className="hover:opacity-80 duration-150"
                onClick={closeMenu}
                href="#home"
              >
                Home
              </a>
              <a
                className="hover:opacity-80 duration-150"
                onClick={closeMenu}
                href="#about"
              >
                About
              </a>
              <a
                className="hover:opacity-80 duration-150"
                onClick={closeMenu}
                href="#skills"
              >
                Skills
              </a>
              <a
                className="hover:opacity-80 duration-150"
                onClick={closeMenu}
                href="#projects"
              >
                Projects
              </a>
              <a
                className="hover:opacity-80 duration-150"
                onClick={closeMenu}
                href="#experience"
              >
                Experience
              </a>
              <a
                className="hover:opacity-80 duration-150"
                onClick={closeMenu}
                href="#contact"
              >
                Contact
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <button
                onClick={() =>
                  window.open("https://linkedin.com/in/jooseparrak", "_blank")
                }
                className="w-fit flex justify-center items-center mt-16 ml-8 px-4 py-2 text-sm font-medium md:px-4 md:py-2 hover:opacity-90 duration-150 uppercase bg-[#ECECEC] text-[#232323]"
                aria-label="View resume"
              >
                <span className="mr-4">
                  <Image
                    src="https://ik.imagekit.io/c0wz4am8etl/Arrak_Portfolio/linkedin_8ds_suOKj.png"
                    alt="in"
                    width={24}
                    height={24}
                  />
                </span>
                Full Resume
              </button>
            </motion.div>
          </motion.nav>
        </div>
      )}

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.26 }}
          transition={{ duration: 0.4 }}
          onClick={closeMenu}
          className="absolute top-0 left-0 z-40 bg-black w-screen h-screen"
        ></motion.div>
      )}
    </header>
  );
}

export default Header;
