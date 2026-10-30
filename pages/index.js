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

let pageTitle = "Joosep Arrak - Product Engineer, Frontend & AI-native";
let description =
  "Joosep Arrak builds product features end to end with React, TypeScript and Node.js. Led the Gantt timeline for Projects at Pipedrive.";
let currentURL = "https://www.arrak.dev";
let siteName = "Joosep Arrak - Product Engineer";
let previewImage = "https://www.arrak.dev/img/socialcard.jpg";
let twitterHandle = "@arrakdev";

const graphcms = new GraphQLClient(process.env.GRAPH_CMS_MASTER);

export default function Home({ employments }) {
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

export async function getStaticProps() {
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

  const { employments } = await graphcms.request(QUERY);

  return {
    props: {
      employments,
    },
    // Regenerate in the background at most once per hour
    revalidate: 3600,
  };
}
