function HomeScreen() {
  return (
    <div
      id="home"
      className="grid w-full h-screen place-items-center md:py-96 py-[50%]"
    >
      <div className="w-2/3 2xl:pl-40 h-full">
        <h1 className="leading-none text-4xl md:text-5xl font-semibold">
          Hello, I&apos;m
          <br />
          Joosep Arrak
        </h1>
        <h2 className="leading-none mt-[52px] text-3xl md:text-4xl font-medium">
          Frontend
          <br />
          Developer.
        </h2>
      </div>
    </div>
  );
}

export default HomeScreen;
