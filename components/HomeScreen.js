import { ArrowRightIcon } from "@phosphor-icons/react/dist/csr/ArrowRight";

export default function HomeScreen() {
  return (
    <div
      id="home"
      className="grid w-full min-h-screen place-items-center pt-40 pb-24 md:py-64 svg-bg"
    >
      <div className="w-full px-10 md:px-0 md:w-2/3 2xl:pl-40 h-full">
        <h1 className="leading-none text-4xl md:text-5xl font-thin">
          <span className="font-light">Hello,</span> I&apos;m
          <br />
          <span className="font-thin">Joosep Arrak</span>
        </h1>
        <h2 className="leading-none mt-13 text-3xl md:text-4xl font-thin">
          Product Engineer.
          <br />
          <span className="text-2xl md:text-3xl">
            Frontend &amp; AI-native.
          </span>
        </h2>
        <p className="mt-10 max-w-xl text-base md:text-lg font-light text-[#FFFAEA]/80">
          I build product features end to end, across frontend and backend, from
          first idea to release. Delivering software that makes an impact.
        </p>
        <a
          href="#work"
          className="w-fit flex items-center mt-10 px-4 py-3 text-sm font-light md:text-base uppercase border border-[#FFFAEA] hover:bg-[#FFFAEA] hover:text-[#17191a] duration-150"
        >
          See my work
          <ArrowRightIcon size={20} className="ml-2" />
        </a>
      </div>
    </div>
  );
}
