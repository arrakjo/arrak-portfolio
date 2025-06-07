import { LinkedinLogoIcon } from "@phosphor-icons/react/dist/csr/LinkedinLogo";
import { ListIcon } from "@phosphor-icons/react/dist/csr/List";
import { XIcon } from "@phosphor-icons/react/dist/csr/X";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

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

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <header className="flex z-10 w-full bg-[#17191a] justify-between p-7 items-center border-b border-[#FFFAEA] fixed">
      <a href="#home" className="text-4xl font-thin">
        Arrak
      </a>

      <button onClick={openMenu} aria-label="Open menu">
        <ListIcon size={48} weight="thin" className="cursor-pointer" />
      </button>

      {menuOpen && (
        <div className="absolute z-50 top-0 right-0">
          <nav className="md:w-96 w-72 h-screen bg-[#17191a] flex flex-col justify-between py-7">
            <div className="flex justify-end pr-7">
              <button onClick={closeMenu} aria-label="Close">
                <XIcon size={48} weight="thin" className="cursor-pointer" />
              </button>
            </div>

            <div className="flex flex-col pl-8 font-thin text-xl md:text-2xl space-y-3 md:space-y-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="hover:text-[#FFFAEA] duration-150"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div>
              <button
                onClick={() =>
                  window.open("https://linkedin.com/in/jooseparrak", "_blank")
                }
                className="w-fit flex justify-center items-center cursor-pointer mt-16 ml-8 mb-12 md:mb-4 px-4 py-2 text-sm font-light md:px-4 md:py-2 hover:bg-white duration-150 uppercase bg-[#FFFAEA] text-[#17191a]"
                aria-label="View resume"
              >
                <span className="mr-2">
                  <LinkedinLogoIcon size={24} />
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
