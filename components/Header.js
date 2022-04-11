import { MenuAlt1Icon } from "@heroicons/react/outline";

function Header() {
  return (
    <header className="flex z-50 w-full bg-[#232323] justify-between p-7 items-center border-b border-[#666666] fixed">
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
      <MenuAlt1Icon className="h-12 rotate-180 cursor-pointer" />
    </header>
  );
}

export default Header;
