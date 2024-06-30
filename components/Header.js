import { MenuAlt1Icon, XIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import Image from "next/legacy/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  return (
    <header className="flex z-10 w-full bg-[#052B2F] justify-between p-7 items-center border-b border-[#FFFAEA] fixed">
      <a href="#home" className="text-4xl font-medium">
        Arrak.
      </a>

      <button onClick={openMenu} aira-label="Open menu">
        <MenuAlt1Icon className="h-12 rotate-180 cursor-pointer" />
      </button>

      {menuOpen && (
        <div className="absolute z-50 top-0 right-0">
          <nav className="md:w-96 w-72 h-screen bg-[#052B2F] flex flex-col justify-between py-7">
            <div className="flex justify-end pr-7">
              <button onClick={closeMenu} aria-label="Close">
                <XIcon className="h-12 cursor-pointer" />
              </button>
            </div>

            <div className="flex flex-col pl-8 font-medium text-xl md:text-2xl space-y-3 md:space-y-4">
              <a
                className="hover:opacity-90 duration-150"
                onClick={closeMenu}
                href="#home"
              >
                Home
              </a>
              <a
                className="hover:opacity-90 duration-150"
                onClick={closeMenu}
                href="#about"
              >
                About
              </a>
              <a
                className="hover:opacity-90 duration-150"
                onClick={closeMenu}
                href="#skills"
              >
                Skills
              </a>
              <a
                className="hover:opacity-90 duration-150"
                onClick={closeMenu}
                href="#experience"
              >
                Experience
              </a>
              <a
                className="hover:opacity-90 duration-150"
                onClick={closeMenu}
                href="#projects"
              >
                Projects
              </a>
              <a
                className="hover:opacity-90 duration-150"
                onClick={closeMenu}
                href="#contact"
              >
                Contact
              </a>
            </div>

            <div>
              <button
                onClick={() =>
                  window.open("https://linkedin.com/in/jooseparrak", "_blank")
                }
                className="w-fit flex justify-center items-center mt-16 ml-8 mb-12 md:mb-4 px-4 py-2 text-sm font-medium md:px-4 md:py-2 hover:bg-white duration-150 uppercase bg-[#FFFAEA] text-[#052B2F]"
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
            </div>
          </nav>
        </div>
      )}

      {menuOpen && (
        <div
          onClick={closeMenu}
          className="absolute top-0 left-0 z-40 bg-black w-screen h-screen opacity-80 backdrop-blur-md"
        ></div>
      )}
    </header>
  );
}
