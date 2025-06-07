export default function HomeScreen() {
  return (
    <div
      id="home"
      className="grid w-full h-screen place-items-center md:py-64 py-[50%] svg-bg"
    >
      <div className="w-2/3 2xl:pl-40 h-full">
        <h1 className="leading-none text-4xl md:text-5xl font-thin">
          <span className="font-light">Hello,</span> I&apos;m
          <br />
          <span className="font-thin">Joosep Arrak</span>
        </h1>
        <h2 className="leading-none mt-[52px] text-3xl md:text-4xl font-thin">
          Frontend
          <br />
          Software Engineer.
        </h2>
      </div>
    </div>
  );
}
