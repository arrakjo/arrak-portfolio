import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Header from "../components/Header";
import HomeScreen from "../components/HomeScreen";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { GraphQLClient, gql } from "graphql-request";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

let pageTitle = "Joosep Arrak - Frontend Software Engineer";
let description =
  "Personal Portfolio of Joosep Arrak - Frontend Software Engineer";
let currentURL = "https://www.arrak.dev";
let siteName = "Frontend Software Engineer Joosep Arrak";
let previewImage = "https://www.arrak.dev/img/socialcardlarge.png";
let twitterHandle = "@arrakdev";

const graphcms = new GraphQLClient(process.env.GRAPH_CMS_MASTER);

export default function Home({ projects, employments }) {
  return (
    <>
      <div className="bg-[#17191a] h-full text-[#FFFAEA]">
        <Head>
          <title>{pageTitle}</title>
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />

          {/* Open Graph */}
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
        <Skills />
        <Experience employmentData={employments} />
        <Projects projectData={projects} />
        <Contact />
      </div>

      <Analytics />
      <SpeedInsights />
    </>
  );
}

export async function getServerSideProps() {
  const QUERY = gql`
    {
      projects(orderBy: position_ASC) {
        id
        name
        url
        sourceUrl
        description
        image {
          url
        }
      }
      employments(orderBy: createdAt_DESC) {
        id
        position
        company
        start
        end
      }
    }
  `;

  const { projects, employments } = await graphcms.request(QUERY);

  return {
    props: {
      projects,
      employments,
    },
  };
}
