import { Bricolage_Grotesque } from "next/font/google";
import type { AppProps } from "next/app";
import "../styles/globals.css";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${bricolage.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
