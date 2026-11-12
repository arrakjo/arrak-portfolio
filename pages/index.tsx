import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Header from "../components/Header";
import HomeScreen from "../components/HomeScreen";
import SelectedWork from "../components/SelectedWork";
import Skills from "../components/Skills";
import { GraphQLClient, gql } from "graphql-request";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { GetStaticProps } from "next";
import type { Employment } from "../components/utils/employment.utils";

type HomeProps = {
  employments: Employment[];
};

const pageTitle = "Joosep Arrak - Software Engineer, Frontend & AI-native";
const description =
  "Joosep Arrak builds product features end to end with React, TypeScript and Node.js. Customer focused & driving impact.";
const currentURL = "https://www.arrak.dev";
const siteName = "Joosep Arrak - Software Engineer";
const previewImage = "https://www.arrak.dev/img/socialcard.jpg";
const twitterHandle = "@arrakdev";

const graphcms = new GraphQLClient(process.env.GRAPH_CMS_MASTER ?? "");

export default function Home({ employments }: HomeProps) {
  return (
    <>
      <div className="bg-[#17191a] h-full text-[#FFFAEA]">
        <Head>
          <title>{pageTitle}</title>
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="canonical" href={currentURL} />

          {/* Open Graph */}
          <meta property="og:type" content="website" key="ogtype" />
          <meta property="og:url" content={currentURL} key="ogurl" />
          <meta property="og:image" content={previewImage} key="ogimage" />
          <meta property="og:site_name" content={siteName} key="ogsitename" />
          <meta property="og:title" content={pageTitle} key="ogtitle" />
          <meta property="og:description" content={description} key="ogdesc" />

          {/* Twitter */}
          <meta
            name="twitter:card"
            content="summary_large_image"
            key="twcard"
          />
          <meta name="twitter:creator" content={twitterHandle} key="twhandle" />
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={previewImage} />
        </Head>

        <Header />
        <HomeScreen />
        <About />
        <SelectedWork />
        <Experience employmentData={employments} />
        <Skills />
        <Contact />
      </div>

      <Analytics />
      <SpeedInsights />
    </>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const QUERY = gql`
    {
      employments(orderBy: createdAt_DESC) {
        id
        position
        company
        start
        end
      }
    }
  `;

  const { employments } = await graphcms.request<{
    employments: Employment[];
  }>(QUERY);

  return {
    props: {
      employments,
    },
    // Regenerate in the background at most once per hour
    revalidate: 3600,
  };
};
